# Reconciliation Process

1. Match payments in `ledger` with invoices in `invoices` table
2. Mark invoices as `paid` when matched by:
   - amount
   - contractor_id
   - within 10-day window
3. Log discrepancies in `reconciliation_logs`

Automate this using nightly batch job or trigger on payment receipt.