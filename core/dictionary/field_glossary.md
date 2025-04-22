# Field Glossary

This document describes key enterprise data elements used throughout the G-Invoicing platform.

## Sample Fields

- **Agency_ID**
  - Description: Unique identifier for the federal agency
  - Type: UUID
  - System of Record: Agency Management System

- **IAA_ID**
  - Description: Interagency Agreement identifier
  - Type: Alphanumeric
  - Governance: Required for all GT&Cs

- **Funding_Amount**
  - Description: Obligated or transferred monetary value
  - Type: Decimal(15,2)
  - Notes: Must be non-negative, validated by DoD thresholds

- **Invoice_Amount**
  - Description: Total value of invoiced performance
  - Type: Decimal(15,2)
  - Validation: Must match Performance metrics