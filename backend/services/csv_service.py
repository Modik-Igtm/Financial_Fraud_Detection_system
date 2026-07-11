import pandas as pd

def read_csv(file_path):
    dataframe = pd.read_csv(file_path)
    return dataframe