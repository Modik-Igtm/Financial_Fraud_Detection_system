from database.database import engine
from database.models import Base
from fastapi import FastAPI
from routes.home import router as home_router
from routes.auth import router as auth_router
from routes.transaction import router as transaction_router
from routes.predict import router as predict_router
from routes.ai import router as ai_router
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Financial Fraud Detection System",
    description="Backend API using FastAPI",
    version="1.0.0"
)

# Include routes
app.include_router(home_router)
app.include_router(auth_router)
app.include_router(transaction_router)
app.include_router(predict_router)
app.include_router(ai_router)