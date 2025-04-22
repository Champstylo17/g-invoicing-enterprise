# Salesforce Integration Sample
def import_agency_from_salesforce(record):
    return {
        "agency_id": record.get("Id"),
        "name": record.get("Name"),
        "email": record.get("Agency_Contact_Email__c")
    }