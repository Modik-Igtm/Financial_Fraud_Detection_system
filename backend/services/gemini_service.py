import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def explain_fraud(transaction, prediction, confidence):

    prompt = f"""
You are an expert financial fraud analyst.

Transaction Details:
{transaction}

Prediction:
{"Fraud" if prediction == 1 else "Legitimate"}

Confidence:
{confidence:.2%}

Explain:
1. Why the transaction was classified this way.
2. Which factors appear suspicious.
3. What action should be taken.
4. Write the explanation in simple language.
"""

    response = model.generate_content(prompt)

    return response.text