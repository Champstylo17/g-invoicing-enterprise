-- Query to summarize invoices by status
SELECT status, COUNT(*) AS total, SUM(amount) AS total_amount
FROM 'warehouse/invoice_data.parquet'
GROUP BY status;