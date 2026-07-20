
from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from database.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, default="user")


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)

    transaction_id = Column(String, unique=True)

    sender = Column(String)

    receiver = Column(String)

    amount = Column(Float)

    location = Column(String)

    device = Column(String)

    payment_method = Column(String)

    prediction = Column(String, default="Pending")

    confidence = Column(Float, default=0)

    risk_score = Column(Float, default=0)

    status = Column(String, default="Under Review")

    analyst = Column(String, default="Unassigned")

    created_at = Column(DateTime, default=datetime.utcnow)


class FraudCase(Base):
    __tablename__ = "fraud_cases"

    id = Column(Integer, primary_key=True, index=True)

    transaction_id = Column(String, unique=True, index=True)

    amount = Column(Float, nullable=False)

    prediction = Column(String, nullable=False)

    confidence = Column(Float, nullable=False)

    risk_score = Column(Integer, nullable=False)

    priority = Column(String, nullable=False)

    recommended_action = Column(String, nullable=False)

    ai_summary = Column(String, default="Pending")

    status = Column(String, default="Open")

    created_at = Column(DateTime, default=datetime.utcnow)