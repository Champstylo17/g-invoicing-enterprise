# Entity Relationship Diagram (ERD)

This is an auto-generated ERD visualizing the G-Invoicing schema.

::: mermaid
erDiagram
    INVOICES ||--o{ USERS : assigned_to
    INVOICES {
        uuid id
        text description
        numeric amount
        varchar status
        timestamp created_at
    }
    USERS {
        uuid id
        text email
        text role
    }
:::