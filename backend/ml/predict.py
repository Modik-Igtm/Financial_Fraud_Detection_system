from pathlib import Path
import joblib

MODEL_PATH = Path(__file__).resolve().parent / "model.pkl"

model = joblib.load(MODEL_PATH)


def predict_transaction(transaction):
    prediction = model.predict([transaction])[0]
    probability = model.predict_proba([transaction])[0]

    return {
        "prediction": int(prediction),
        "confidence": float(max(probability))
    }


def predict_dataframe(df):
    predictions = model.predict(df)
    probabilities = model.predict_proba(df)

    results = []

    for prediction, probability in zip(predictions, probabilities):
        results.append({
            "prediction": int(prediction),
            "confidence": float(max(probability))
        })

    return results