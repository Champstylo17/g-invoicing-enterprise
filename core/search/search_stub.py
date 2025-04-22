# Basic search implementation for invoices

import json

def search_invoices(query, file_path="crm/agency_model.json"):
    with open(file_path, "r") as f:
        data = json.load(f)
    results = []
    for contractor in data.get("contractors", []):
        if query.lower() in contractor["name"].lower():
            results.append(contractor)
    return results

if __name__ == "__main__":
    print(search_invoices("Alpha"))