from pydantic import BaseModel

class TransactionCreate(BaseModel):
    transaction_id: str
    sender: str
    receiver: str
    amount: float
    location: str
    device: str
    payment_method: str
    status: str
    



