from fastapi import APIRouter
from pydantic import BaseModel

from services.gemini_service import explain_fraud

router = APIRouter(
    prefix="/ai",
    tags=["Generative AI"]
)


class AIRequest(BaseModel):
    transaction: dict
    prediction: int
    confidence: float


@router.post("/explain")
def explain(request: AIRequest):

    explanation = explain_fraud(
        request.transaction,
        request.prediction,
        request.confidence
    )

    return {
        "explanation": explanation
    }