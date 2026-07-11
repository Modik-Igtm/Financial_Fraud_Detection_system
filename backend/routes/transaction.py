
from fastapi import APIRouter, UploadFile, File
import pandas as pd
import shutil
import os

from ml.predict import predict_dataframe

router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_csv(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    dataframe = pd.read_csv(file_path)

    X = dataframe.drop("Class", axis=1)

    predictions = predict_dataframe(X)

    dataframe["Prediction"] = [
        p["prediction"]
        for p in predictions
    ]

    dataframe["Confidence"] = [
        p["confidence"]
        for p in predictions
    ]

    return dataframe.to_dict(orient="records")