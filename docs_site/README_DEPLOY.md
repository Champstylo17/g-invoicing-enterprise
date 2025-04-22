
# 📘 G-Invoicing Documentation Deployment Guide

This guide explains how to deploy the G-Invoicing documentation site created using Docusaurus.

---

## 🔹 GitHub Pages

### Prerequisites:
- Repo connected to GitHub
- `homepage` field in `package.json` is correctly set to `"https://<username>.github.io/<repo-name>"`

### Steps:
```bash
# From inside docs_site/
chmod +x deploy_github_pages.sh
./deploy_github_pages.sh
```
This builds the docs and deploys to the `gh-pages` branch using Docusaurus.

---

## 🔹 Netlify

### Steps:
1. Log into Netlify and click “Add new site” → “Import an existing project”
2. Point to your repo and select `docs_site` as the root
3. Use these build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`

Netlify will auto-deploy when you push changes.

---

## 🔹 Vercel

### Steps:
1. Go to [vercel.com](https://vercel.com) and import your Git repo
2. Set `docs_site` as the root directory
3. Use these settings:
   - **Framework**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

---

## 🔹 CodeSandbox

CodeSandbox automatically renders `README.md` and supports static hosting for Docusaurus.

### Steps:
1. Upload or link the `docs_site/` folder to [CodeSandbox](https://codesandbox.io/)
2. Configure using `sandbox.config.json` if needed
3. Preview will auto-refresh when you make changes

---

## 🔹 Docker

### Steps:
```bash
# Build the docs site
npm install
npm run build

# Create Docker image
docker build -t g-invoicing-docs .

# Run container
docker run -d -p 3000:3000 g-invoicing-docs
```

### Dockerfile (example)
```Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD [ "npx", "serve", "build", "-l", "3000" ]
```

Save this as `Dockerfile` inside `docs_site/`.

---

## ✅ Summary
You can deploy your G-Invoicing documentation using:
- 🟦 GitHub Pages
- 🟩 Netlify
- ⚡ Vercel
- 🧪 CodeSandbox
- 🐳 Docker

