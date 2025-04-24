# G-Invoicing Enterprise Dashboard

A modern, modular, government-style enterprise dashboard platform for managing agreements, audits, compliance, and transitions using React, Express, Tailwind, JWT, and REST APIs.

---

## 🔹 Project Overview

This system is designed to streamline and secure interagency invoicing and performance tracking across government entities. It includes:

- 📊 Visual analytics dashboard
- 🔐 JWT-based login & protected routing
- 🧭 Sidebar navigation + breadcrumb trails
- 📁 Role-based views for Admin, Analyst, Reviewer
- ⚙️ Express API backend with mock data & auth
- 🌐 Fully deployable on Render or Vercel

---

## 🔐 Auth Flow

1. Users log in via `/api/auth/login` with predefined credentials
2. On success, a JWT is returned and stored in `localStorage`
3. All protected routes check this token via `<ProtectedRoute />`
4. User role is decoded and used to conditionally show dashboard features

Default users:

```json
[
  { "username": "admin", "password": "secret", "role": "admin" },
  { "username": "analyst", "password": "pass123", "role": "analyst" },
  { "username": "reviewer", "password": "pass123", "role": "reviewer" }
]
```

---

## 🛠 Dev Setup

```bash
# From root
cd apps/web
npm install
npm run dev
```

```bash
cd ../api
npm install
node server.js
```

> Frontend: http://localhost:5173  
> Backend: http://localhost:5000

---

## 🚀 Deployment

### Deploy Frontend Only (Vercel)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import)

### Deploy Fullstack (Render)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/docs/deploy-a-web-service)

---

## 📁 Project Structure

```
apps/
├── api/          # Express backend
├── web/          # Vite + React + Tailwind frontend

infra/            # Docker, Terraform, K8s (optional)
components/       # UI + charts + layout + auth
pages/            # Login, Dashboard, etc.
```

---

## 🧪 Sample Routes

- `GET /api/agreements`  
- `GET /api/metrics`  
- `POST /api/auth/login`

---

## 📜 License

MIT License © 2025 — G-Invoicing Enterprise Team
