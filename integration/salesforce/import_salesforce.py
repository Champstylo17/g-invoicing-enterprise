# Salesforce agency import

from integration.salesforce_agency_importer import import_agency_from_salesforce

def sync_salesforce_record(record):
    agency = import_agency_from_salesforce(record)
    print("Imported agency:", agency)