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
