
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.dependency import get_db
from database.models import User

from schemas.user_schema import UserRegister, UserLogin
from services.auth_service import hash_password, verify_password

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(user: UserRegister, db: Session = Depends(get_db)):

    existing = db.query(User).filter(User.email == user.email).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password),
        role=user.role
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "Registration Successful"
    }


@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):

    existing = db.query(User).filter(User.email == user.email).first()

    if not existing:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    if not verify_password(
        user.password,
        existing.password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid password"
        )

    return {
        "message": "Login Successful",
        "user": {
            "id": existing.id,
            "name": existing.name,
            "email": existing.email,
            "role": existing.role
        }
    }