
```mermaid
graph TD
    A[User Interface] --> B[Frontend (React/Static)]
    B --> C[API Gateway / Backend (Flask/Node)]
    C --> D1[Core Services]
    D1 --> D2[Business Rules]
    D1 --> D3[Data Dictionary]
    D1 --> D4[AI Models]
    D1 --> D5[Security & Audit]

    C --> E1[Financial Modules]
    E1 --> E2[Ledger]
    E1 --> E3[Payments]
    E1 --> E4[Reconciliation]
    E1 --> E5[Tracking]

    C --> F1[Integrations]
    F1 --> F2[Stripe]
    F1 --> F3[Salesforce]
    F1 --> F4[QuickBooks]
    F1 --> F5[Xero]

    C --> G[Database]
    G --> G1[Seeds & Migrations]
    G --> G2[Warehouse (DuckDB)]

    C --> H[Infrastructure]
    H --> H1[Docker / NGINX]
    H --> H2[CI/CD GitHub Actions]
    H --> H3[Terraform]
    H --> H4[Monitoring (Sentry, Prometheus)]

    C --> I[Documentation & Compliance]
```
