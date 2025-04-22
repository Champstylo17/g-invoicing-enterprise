# ETL loader for QuickBooks via webhook handler

from integration.quickbooks_webhook_handler import handle_quickbooks_event

def run_quickbooks_etl(mock_event):
    handle_quickbooks_event(mock_event)
    print("ETL for QuickBooks complete")