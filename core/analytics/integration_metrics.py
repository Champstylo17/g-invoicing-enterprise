# Combine external data for reporting

import csv

def load_refrens_data(file_path="integration/refrens_import.csv"):
    with open(file_path, newline="") as f:
        reader = csv.DictReader(f)
        return list(reader)

def calculate_external_invoice_volume():
    refrens = load_refrens_data()
    return len(refrens)