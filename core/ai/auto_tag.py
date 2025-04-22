# Auto-tagging logic using pattern recognition

def auto_tag_invoice(invoice):
    tags = []
    if invoice.get("amount", 0) > 100000:
        tags.append("High Value")
    if "technology" in invoice.get("description", "").lower():
        tags.append("Tech")
    if invoice.get("status") == "pending":
        tags.append("Follow Up")
    return tags