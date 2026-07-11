from fastapi import APIRouter
from pydantic import BaseModel
from ml.predict import predict_transaction

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"]
)

class PredictionRequest(BaseModel):
    features: list

@router.post("/")
def predict(request: PredictionRequest):
    return predict_transaction(request.features)