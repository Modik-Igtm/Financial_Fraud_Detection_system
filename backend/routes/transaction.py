
from fastapi import APIRouter, UploadFile, File
import pandas as pd
import shutil
import os
from datetime import datetime

from database.database import SessionLocal
from database.models import FraudCase
from ml.predict import predict_dataframe

router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_csv(file: UploadFile = File(...)):

    db = SessionLocal()

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    dataframe = pd.read_csv(file_path)

    # Features for prediction
    X = dataframe.drop("Class", axis=1)

    predictions = predict_dataframe(X)

    response = []

    for index, (_, row) in enumerate(dataframe.iterrows()):

        prediction = predictions[index]

        fraud_case = FraudCase(
            transaction_id=f"TRX{index+1:06d}",
            amount=float(row["Amount"]),
            prediction=prediction["prediction"],
            confidence=prediction["confidence"],
            risk_score=prediction["risk_score"],
            priority=prediction["priority"],
            recommended_action=prediction["recommended_action"],
            ai_summary="Pending",
            status="Open",
            created_at=datetime.utcnow()
        )

        db.add(fraud_case)

        response.append({
            "transaction_id": fraud_case.transaction_id,
            "amount": fraud_case.amount,
            "prediction": fraud_case.prediction,
            "confidence": fraud_case.confidence,
            "risk_score": fraud_case.risk_score,
            "priority": fraud_case.priority,
            "recommended_action": fraud_case.recommended_action
        })
  
@router.get("/")
def get_transactions():

    db = SessionLocal()

    try:
        cases = (
            db.query(FraudCase)
            .order_by(FraudCase.created_at.desc())
            .limit(100)
            .all()
        )

        return [
            {
                "id": case.id,
                "transaction_id": case.transaction_id,
                "amount": case.amount,
                "prediction": case.prediction,
                "confidence": case.confidence,
                "risk_score": case.risk_score,
                "priority": case.priority,
                "recommended_action": case.recommended_action,
                "ai_summary": case.ai_summary,
                "status": case.status,
                "created_at": case.created_at
            }
            for case in cases
        ]

    finally:
        db.close()
@router.get("/{transaction_id}")
def get_transaction(transaction_id: str):

    db = SessionLocal()

    try:
        case = (
            db.query(FraudCase)
            .filter(
                FraudCase.transaction_id == transaction_id
            )
            .first()
        )

        if not case:
            return {
                "error": "Transaction not found"
            }

        return {
            "id": case.id,
            "transaction_id": case.transaction_id,
            "amount": case.amount,
            "prediction": case.prediction,
            "confidence": case.confidence,
            "risk_score": case.risk_score,
            "priority": case.priority,
            "recommended_action": case.recommended_action,
            "ai_summary": case.ai_summary,
            "status": case.status,
            "created_at": case.created_at
        }

    finally:
        db.close()
    db.commit()
    db.close()

    return response

