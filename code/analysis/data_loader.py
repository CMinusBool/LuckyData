import glob
import os
import pandas as pd


def load_data():
    """Load all Car Accidents CSV files and return a dict of DataFrames keyed by year."""
    pattern = '*_CarAccidents.csv'
    csv_files = glob.glob(pattern)
    data = {}
    for file in csv_files:
        year = os.path.basename(file).split('_')[0]
        df = pd.read_csv(file)
        data[year] = df
    return data


if __name__ == '__main__':
    data = load_data()
    print(f"Loaded data for years: {list(data.keys())}") 