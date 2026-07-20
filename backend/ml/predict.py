
from pathlib import Path
import joblib

MODEL_PATH = Path(__file__).resolve().parent / "model.pkl"

model = joblib.load(MODEL_PATH)


def calculate_risk(prediction, confidence):
    score = round(confidence * 100)

    if prediction == 0:
        return 10, "Low", "Approve"

    if score >= 95:
        return 100, "Critical", "Freeze Transaction"

    elif score >= 85:
        return 85, "High", "Require Manual Review"

    elif score >= 70:
        return 70, "Medium", "Monitor Transaction"

    else:
        return 50, "Low", "Approve"


def predict_transaction(transaction):

    prediction = model.predict([transaction])[0]
    probability = model.predict_proba([transaction])[0]
    confidence = float(max(probability))

    risk_score, priority, action = calculate_risk(prediction, confidence)

    return {
        "prediction": "Fraud" if prediction == 1 else "Safe",
        "confidence": round(confidence * 100, 2),
        "risk_score": risk_score,
        "priority": priority,
        "recommended_action": action
    }


def predict_dataframe(df):

    predictions = model.predict(df)
    probabilities = model.predict_proba(df)

    results = []

    for prediction, probability in zip(predictions, probabilities):

        confidence = float(max(probability))

        risk_score, priority, action = calculate_risk(prediction, confidence)

        results.append({
            "prediction": "Fraud" if prediction == 1 else "Safe",
            "confidence": round(confidence * 100, 2),
            "risk_score": risk_score,
            "priority": priority,
            "recommended_action": action
        })

    return results