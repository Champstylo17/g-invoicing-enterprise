# 📚 G-Invoicing Monorepo – Feature Supplement

This document summarizes **all enhancements and modules** added across all phases of the monorepo transformation.

---

## ✅ Core Structure
- `apps/api`: Express backend (Node.js)
- `apps/web`: Unified Vite + Tailwind React frontend
- `apps/api-python`: Optional Flask backend
- `packages/ui`: Shared UI components (Storybook-ready)
- `packages/config`: `.env.template`, env loader
- `packages/utils`: Seeder scripts, formatters
- `tools/create-ginvoicing`: Publishable CLI
- `.github`: Workflows, discussions, templates

---

## 🚀 DevOps, CI/CD, Tooling
- **Turbo monorepo** with workspaces
- **Docker** (Dev, Prod, Test)
- **Docker healthcheck** for containers
- **GitHub Actions**: build, test, release, matrix testing
- **Dependabot** for dependencies
- **Size-limit** for bundle size analysis
- **Release Drafter**
- **Stale Bot** (auto-close idle issues/PRs)
- **Chromatic** for Storybook deployment (config pending token)
- **DevContainer** for VS Code remote-ready dev

---

## 🧠 Smart DX Enhancements
- `init.sh`: auto-bootstraps full stack
- **Playwright** for e2e tests
- **Loom embed** in docs (placeholder)
- **/ask CLI** (AI assistant placeholder)
- **Bug Report Button** (opens GitHub issue)
- **Discord/Slack Webhooks** (hooks placeholder)

---

## 🔐 Backend Intelligence & Security
- **RBAC DSL** in `/packages/config/rbac.yaml`
- **Feature Flags** (middleware-ready)
- **GraphQL API** (`/graphql`) – scaffolded
- **Zod Validation** for safe inputs
- **Zero-Downtime DB Migrations**
- **Error Logging** (Sentry integration pending)
- **Multi-Tenant Middleware** (tenantId in session)
- **Plugin Architecture** (registerPlugin pattern)
- **/status** Endpoint (healthcheck, DB status)

---

## 📘 Documentation & Distribution
- **Docusaurus** for full project docs
- **Docs deploy workflow** to GitHub Pages
- **Storybook** with UI snapshots
- **OpenAPI Client Generator**
- **SBOM** + license checker tools

---

## 💡 Future Setup Required
| Feature | Action |
|--------|--------|
| Chromatic | Add `CHROMATIC_PROJECT_TOKEN` secret |
| Discord/Slack Webhook | Add webhook URL to `.env` |
| PostHog (RUM) | Add project key in frontend |
| Sentry | Add DSN to `.env` |

---

_Last updated: Phase 3 kick-off_