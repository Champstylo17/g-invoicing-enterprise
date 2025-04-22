import pandas as pd

def run_etl():
    df = pd.read_csv('data/invoices.csv')
    df['amount'] = df['amount'].fillna(0)
    df['normalized_status'] = df['status'].str.lower()
    df.to_parquet('warehouse/invoice_data.parquet')
    print("ETL complete and saved to warehouse.")

if __name__ == "__main__":
    run_etl()