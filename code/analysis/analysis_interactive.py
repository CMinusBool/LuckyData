import os
import json
import pandas as pd
from data_loader import load_data


def process_data_for_d3():
    """Process and export the data for D3.js visualization."""
    # Load the data
    print("Loading data...")
    data_dict = load_data()
    
    # Create data directory if it doesn't exist
    os.makedirs('data', exist_ok=True)
    
    # Process data for yearly comparison chart
    yearly_data = []
    for year, df in data_dict.items():
        yearly_data.append({
            'year': year,
            'count': len(df)
        })
    
    with open('data/yearly_comparison.json', 'w', encoding='utf-8') as f:
        json.dump(yearly_data, f, ensure_ascii=False)
    
    # Process monthly trend data
    monthly_data = {}
    for year, df in data_dict.items():
        if '發生月份' in df.columns:
            month_counts = df['發生月份'].value_counts().sort_index()
            monthly_data[year] = [{'month': int(month), 'count': count} 
                                  for month, count in month_counts.items()]
    
    with open('data/monthly_trends.json', 'w', encoding='utf-8') as f:
        json.dump(monthly_data, f, ensure_ascii=False)
    
    # Process data for individual histograms
    numeric_columns = ['緯度', '經度', '當事者事故發生時年齡', '發生時間']
    for year, df in data_dict.items():
        year_data = {}
        
        for col in numeric_columns:
            if col in df.columns:
                # Get data and bin it
                values = df[col].dropna().tolist()
                year_data[col] = values
        
        with open(f'data/{year}_histograms.json', 'w', encoding='utf-8') as f:
            json.dump(year_data, f, ensure_ascii=False)
    
    # Process correlation matrices
    for year, df in data_dict.items():
        numeric_df = df.select_dtypes(include=['number'])
        if not numeric_df.empty:
            corr_matrix = numeric_df.corr().reset_index()
            corr_data = []
            
            for i, row in corr_matrix.iterrows():
                for col in numeric_df.columns:
                    if col != 'index':
                        corr_data.append({
                            'x': row['index'],
                            'y': col,
                            'value': row[col]
                        })
            
            with open(f'data/{year}_correlation.json', 'w', encoding='utf-8') as f:
                json.dump(corr_data, f, ensure_ascii=False)
    
    # Create a metadata file with column translations
    column_metadata = {}
    for year, df in data_dict.items():
        for col in df.columns:
            # This is a placeholder - in a real scenario, you'd translate these
            english_name = col
            if col not in column_metadata:
                column_metadata[col] = {
                    'chinese': col,
                    'english': english_name,
                    'years': [year]
                }
            else:
                if year not in column_metadata[col]['years']:
                    column_metadata[col]['years'].append(year)
    
    with open('data/columns_metadata.json', 'w', encoding='utf-8') as f:
        json.dump(column_metadata, f, ensure_ascii=False)
    
    print("Data processing complete. JSON files saved to 'data/' directory.")


if __name__ == "__main__":
    process_data_for_d3() 