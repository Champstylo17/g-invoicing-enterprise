
def map_to_xero(invoice):
    return {
        "ContactName": invoice["contractor_name"],
        "InvoiceNumber": invoice["invoice_id"],
        "DueDate": invoice["due_date"]
    }
