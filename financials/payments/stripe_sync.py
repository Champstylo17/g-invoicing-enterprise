# Stripe to G-Invoicing Sync Example
def sync_stripe_invoice(stripe_event):
    invoice_id = stripe_event.get("data", {}).get("object", {}).get("id")
    amount_paid = stripe_event.get("data", {}).get("object", {}).get("amount_paid")
    print(f"Invoice {invoice_id} paid: ${amount_paid / 100}")