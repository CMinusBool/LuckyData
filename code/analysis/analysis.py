import os
import pandas as pd
from data_loader import load_data
import matplotlib.pyplot as plt
import seaborn as sns


def main():
    # Load data
    data = load_data()
    # Create figures directory
    os.makedirs('figures', exist_ok=True)
    # Open markdown report
    with open('analysis_report.md', 'w', encoding='utf-8') as report:
        report.write('# Car Accidents Analysis\n\n')
        for year, df in sorted(data.items()):
            report.write(f'## Year {year}\n\n')
            report.write('### Summary Statistics\n\n')
            # Numeric columns summary
            num_cols = df.select_dtypes(include=['number']).columns
            if len(num_cols) > 0:
                num_desc = df[num_cols].describe()
                report.write('#### Numerical Columns\n\n')
                report.write(num_desc.to_markdown() + '\n\n')
            # Categorical columns summary
            cat_cols = df.select_dtypes(include=['object', 'category']).columns
            if len(cat_cols) > 0:
                report.write('#### Categorical Columns\n\n')
                for col in cat_cols:
                    freq = df[col].value_counts()
                    report.write(f'##### {col}\n\n')
                    report.write(freq.to_markdown() + '\n\n')
            # Figures
            report.write('### Figures\n\n')
            # Histograms for numeric columns
            for col in num_cols:
                plt.figure(figsize=(8, 4))
                sns.histplot(df[col].dropna(), bins=30, kde=True)
                hist_path = f'figures/{year}_{col}_hist.png'
                plt.title(f'{year} - {col} Distribution')
                plt.savefig(hist_path)
                plt.close()
                report.write(f'#### {col} Distribution\n\n')
                report.write(f'![{col} histogram]({hist_path})\n\n')
            # Correlation heatmap
            if len(num_cols) > 1:
                corr = df[num_cols].corr()
                plt.figure(figsize=(10, 8))
                sns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm')
                heatmap_path = f'figures/{year}_correlation_heatmap.png'
                plt.title(f'{year} - Correlation Heatmap')
                plt.savefig(heatmap_path)
                plt.close()
                report.write('#### Correlation Heatmap\n\n')
                report.write(f'![Correlation Heatmap]({heatmap_path})\n\n')
    print('Analysis complete. See analysis_report.md and figures directory.')


if __name__ == '__main__':
    main()