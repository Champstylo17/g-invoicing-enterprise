# Financial ledger transaction model

from datetime import datetime

ledger = []

def add_transaction(txn_type, amount, contractor_id, invoice_id=None):
    ledger.append({
        "transaction_id": f"txn_{len(ledger)+1:04d}",
        "type": txn_type,
        "amount": amount,
        "contractor_id": contractor_id,
        "invoice_id": invoice_id,
        "timestamp": datetime.utcnow().isoformat()
    })

def get_ledger():
    return ledger

if __name__ == "__main__":
    add_transaction("invoice", 18000, "c456", "INV004")
    add_transaction("payment", 18000, "c456", "INV004")
    for txn in get_ledger():
        print(txn)