
from fastapi import APIRouter
from sqlalchemy import func

from database.database import SessionLocal
from database.models import FraudCase

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/summary")
def get_dashboard_summary():

    db = SessionLocal()

    try:
        total_transactions = db.query(FraudCase).count()

        fraud_transactions = (
            db.query(FraudCase)
            .filter(FraudCase.prediction == "Fraud")
            .count()
        )

        safe_transactions = (
            db.query(FraudCase)
            .filter(FraudCase.prediction == "Safe")
            .count()
        )

        critical_cases = (
            db.query(FraudCase)
            .filter(
                FraudCase.prediction == "Fraud",
                FraudCase.priority == "Critical"
            )
            .count()
        )

        potential_loss_prevented = (
            db.query(func.sum(FraudCase.amount))
            .filter(FraudCase.prediction == "Fraud")
            .scalar()
            or 0
        )

        average_risk_score = (
            db.query(func.avg(FraudCase.risk_score))
            .scalar()
            or 0
        )

        return {
            "total_transactions": total_transactions,
            "fraud_transactions": fraud_transactions,
            "safe_transactions": safe_transactions,
            "critical_cases": critical_cases,
            "potential_loss_prevented": round(
                float(potential_loss_prevented), 2
            ),
            "average_risk_score": round(
                float(average_risk_score), 2
            )
        }

    finally:
        db.close()