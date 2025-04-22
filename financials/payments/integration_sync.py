# Payment sync across Stripe and Square

from integration.stripe_sync import sync_stripe_invoice
from integration.square_invoice_adapter import transformSquareInvoice

def process_stripe_event(event):
    sync_stripe_invoice(event)

def process_square_invoice(square_data):
    invoice = transformSquareInvoice(square_data)
    print("Processed Square Invoice:", invoice)