# G-Invoicing Enterprise Application

![Build](https://github.com/your-org/g-invoicing/actions/workflows/test.yml/badge.svg)
![Security](https://github.com/your-org/g-invoicing/actions/workflows/snyk.yml/badge.svg)
![Coverage](https://github.com/your-org/g-invoicing/actions/workflows/report.yml/badge.svg)

## Overview
A fullstack, enterprise-ready G-Invoicing application designed for government financial systems and interagency agreement processing.

## Features
- 🚀 Next.js frontend with Tailwind UI
- 🧠 Node.js + NestJS API with OpenAPI, GraphQL, gRPC
- 🔐 Supabase-authenticated Postgres DB
- 📊 Dashboards & diagrams with Mermaid, Recharts
- 📦 Docker, Terraform, GitHub Actions CI/CD
- 🎯 RBAC, audit logging, monitoring, and more

## Quick Start

```bash
# Clone and run
git clone https://github.com/your-org/g-invoicing
cd g-invoicing
cp .env.example .env
docker-compose up --build
```

## Documentation
- [Architecture Overview](./docs/ARCHITECTURE_OVERVIEW.md)
- [API Docs](./frontend/pages/docs.tsx)
- [Data Flow](./docs/DATA_FLOW.md)
- [ERD](./docs/architecture_diagrams/erd.md)

## Developer Setup
VS Code + Dev Container ready. Just:
- Open repo in VS Code
- Click "Reopen in Container"

## License
MIT License