# Compliance Field Mapping

This outlines how key G-Invoicing fields align with external federal requirements.

| Field            | Compliant With | Requirement | Notes |
|------------------|----------------|-------------|-------|
| Agency_ID        | GTAS, Treasury | Unique ID   | Sourced from CARS registry |
| IAA_ID           | DoD, OMB A-11  | Traceability| Required for all IGT actions |
| Funding_Amount   | FAR, FMMI      | Fiscal Codes| Reviewed by Certifying Official |
| Invoice_Amount   | Treasury, GTAS | Audit Trail | Must match Treasury Upload |