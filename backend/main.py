
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.database import engine
from database.models import Base

from routes.home import router as home_router
from routes.auth import router as auth_router
from routes.transaction import router as transaction_router
from routes.predict import router as predict_router
from routes.ai import router as ai_router

# Create all database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Financial Fraud Detection System",
    description="AI-powered fraud detection using FastAPI, Machine Learning and Gemini AI",
    version="1.0.0"
)

# Enable CORS for React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all routes
app.include_router(home_router)
app.include_router(auth_router)
app.include_router(transaction_router)
app.include_router(predict_router)
app.include_router(ai_router)


@app.get("/")
def root():
    return {
        "message": "AI Financial Fraud Detection System API is running."
    }