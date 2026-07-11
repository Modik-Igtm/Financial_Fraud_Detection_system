import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load Dataset
from pathlib import Path
import pandas as pd

BASE_DIR = Path(__file__).resolve().parent.parent.parent
DATASET_PATH = BASE_DIR / "dataset" / "creditcard.csv"

data = pd.read_csv(DATASET_PATH)

# Features and Target
X = data.drop("Class", axis=1)
y = data["Class"]

# Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Train Model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train, y_train)

# Save Model
joblib.dump(model, "model.pkl")

print("Model Trained Successfully!")