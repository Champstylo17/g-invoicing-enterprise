# QuickBooks Webhook Handler
def handle_quickbooks_event(event):
    if event.get("event") == "InvoicePaid":
        print("Sync payment confirmation with G-Invoicing")