from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime

from database.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    email = Column(String, unique=True, nullable=False)

    password = Column(String, nullable=False)

    role = Column(String, default="analyst")

from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime

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

    status = Column(String)

    created_at = Column(DateTime, default=datetime.utcnow)