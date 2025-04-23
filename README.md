# 🚀 G-Invoicing Enterprise SaaS Monorepo

This is a fully modular, production-ready SaaS monorepo template. Includes:

- Turbo monorepo with `apps/`, `packages/`, `docs/`
- Express backend, React frontend, optional Python API
- RBAC, multi-tenancy, feature flags, GraphQL, plugins
- CI/CD with GitHub Actions, Docker, Docusaurus, Storybook

---

## 🧰 Deploy Guides

### 🚀 Deploy to Vercel (Frontend)
- Install [Vercel CLI](https://vercel.com/cli)
- Link project and deploy:
```bash
cd apps/web
vercel
```

### 🐳 Deploy with Docker Compose
```bash
cp .env.template .env
docker-compose up --build
```

### ☁️ Deploy to Fly.io
```bash
flyctl launch --dockerfile apps/api/Dockerfile
```

### 🚄 Deploy to Railway
- Import GitHub repo at https://railway.app
- Set env vars: `DB_ENGINE`, `PORT`, `JWT_SECRET`
- Set root dir as `apps/api`, install & run `npm start`

---

## 🧪 Test
```bash
npm run test --workspaces
```

## 🧠 Want to customize?
Run the CLI:
```bash
npx create-ginvoicing my-app
```

---

## 📚 Docs
See `/docs` or [docs.ginvoicing.com](https://docs.ginvoicing.com) (if published)
---

## 📈 Monorepo Graph
Run the following to visualize dependencies:

```bash
npx turbo run graph
```
---

## 🚀 Deploy Anywhere

### 🧭 Vercel (Frontend)
- GitHub → `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- GitHub Action: `.github/workflows/vercel_deploy.yml`

### 🚀 Fly.io (API)
- Create app via `flyctl launch`
- Add `FLY_API_TOKEN` to GitHub Secrets

### 🚂 Railway
- Import GitHub repo at https://railway.app
- Uses `railway.json` for config# G_Invoice_Enterprise


## 🚀 Deployment Setup

# 🚀 Deployment Guide for G-Invoicing Enterprise

This directory contains all deployment-related scripts, configs, and CI/CD automation for launching the G-Invoicing Enterprise platform.

---

## 📁 Contents

### 🐳 Docker

- `docker-compose.yml`  
  Orchestrates NGINX reverse proxy, Node.js backend, and static frontend. Ideal for local dev, staging, or simple production setups.

- `nginx.conf` (mounted from `infra/docker/`)  
  Routes `/api/` to backend and serves SPA from `/`.

---

### ☁️ GitHub Actions (CI/CD)

- `deploy.yml`  
  Generic production deploy pipeline. Extendable.

- `fly_deploy.yml`  
  Deploys to [Fly.io](https://fly.io) — great for global scaling.

- `vercel_deploy.yml`  
  Pushes your frontend to Vercel — ideal for React/Vite static sites.

- `deploy_docs_and_storybook.yml`  
  Publishes documentation (Docusaurus/Markdown) and component previews (Storybook).

---

### 🚂 Platform Scripts

- `deploy_heroku.sh`  
  One-click Heroku deployment via CLI/Git.

---

### 🗺 Architecture Diagram

- `Mermaid_Architecture.md`  
  Visual map of system: User → NGINX → Backend/API + Frontend SPA.

---

## 📦 Usage

```bash
# To bring up the stack locally
docker-compose -f deploy/docker-compose.yml up --build
```

Customize for dev/staging/prod using multiple compose files or env vars.

---

## 🚀 One-Click Deployment

Deploy your full-stack G-Invoicing Enterprise platform with a single click.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/Champstylo17/g-invoicing-enterprise)

[![Deploy to Fly.io](https://img.shields.io/badge/Deploy-Fly.io-blue?logo=fly.io)](https://fly.io/dashboard)

[![Deploy to Render](https://img.shields.io/badge/Deploy%20to-Render-brightgreen?logo=render)](https://render.com/deploy)

[![Open in Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?repo=Champstylo17/g-invoicing-enterprise)

---
