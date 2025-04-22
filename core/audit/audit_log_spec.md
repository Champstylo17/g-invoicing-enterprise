# Audit Log Specification

Every user action in the system is recorded with:
- user_id
- action (string)
- resource (e.g. invoice_id)
- timestamp
- status (success/failure)
- IP address (optional)