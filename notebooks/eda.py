import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

# Create folder to save graphs
os.makedirs("../reports/plots", exist_ok=True)

# Load cleaned dataset
df = pd.read_csv("../dataset/cleaned_creditcard.csv")

plt.style.use("ggplot")

# 1. Dataset Shape
print("Shape:", df.shape)

# 2. Class Distribution
plt.figure(figsize=(6,5))
sns.countplot(x="Class", data=df)
plt.title("Fraud vs Non-Fraud Transactions")
plt.xlabel("Class")
plt.ylabel("Count")
plt.savefig("../reports/plots/class_distribution.png")
plt.show()

# 3. Transaction Amount Distribution
plt.figure(figsize=(8,5))
sns.histplot(df["Amount"], bins=50, kde=True)
plt.title("Transaction Amount Distribution")
plt.savefig("../reports/plots/amount_distribution.png")
plt.show()

# 4. Time Distribution
plt.figure(figsize=(8,5))
sns.histplot(df["Time"], bins=50, color="green")
plt.title("Transaction Time Distribution")
plt.savefig("../reports/plots/time_distribution.png")
plt.show()

# 5. Fraud Amount Distribution
plt.figure(figsize=(8,5))
sns.boxplot(x="Class", y="Amount", data=df)
plt.title("Fraud vs Amount")
plt.savefig("../reports/plots/fraud_amount_boxplot.png")
plt.show()

# 6. Correlation Heatmap
plt.figure(figsize=(15,12))
corr = df.corr()

sns.heatmap(
    corr,
    cmap="coolwarm",
    center=0
)

plt.title("Correlation Heatmap")
plt.savefig("../reports/plots/correlation_heatmap.png")
plt.show()

print("\nEDA Completed Successfully!")