from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def home():
    return {
        "message": "Welcome to AI Financial Fraud Detection System"
    }

@router.get("/health")
def health():
    return {
        "status": "Backend is running successfully!"
    }