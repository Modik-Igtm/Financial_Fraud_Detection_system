import pandas as pd

# Load dataset
df = pd.read_csv("../dataset/creditcard.csv")

print("=" * 50)
print("DATASET INFORMATION")
print("=" * 50)

print(df.info())

print("\nShape:")
print(df.shape)

print("\nFirst 5 rows:")
print(df.head())

print("\nMissing Values:")
print(df.isnull().sum())

print("\nDuplicate Rows:", df.duplicated().sum())

# Remove duplicates
df = df.drop_duplicates()

print("\nShape after removing duplicates:")
print(df.shape)

print("\nData Types:")
print(df.dtypes)

# Save cleaned dataset
df.to_csv("../dataset/cleaned_creditcard.csv", index=False)

print("\n✅ Cleaned dataset saved successfully!")