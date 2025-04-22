# Tagging engine for applying category metadata

def apply_tags(invoice):
    tags = []
    if invoice.get("amount", 0) > 100000:
        tags.append("High Value")
    if "energy" in invoice.get("description", "").lower():
        tags.append("Sustainability")
    if invoice.get("status") == "pending":
        tags.append("Pending Review")
    return tags

if __name__ == "__main__":
    sample_invoice = {
        "id": "INV003",
        "description": "Solar energy installation project",
        "amount": 120000,
        "status": "pending"
    }
    print(apply_tags(sample_invoice))