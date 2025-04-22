# 🧾 CHANGELOG

## Enterprise Core (VB + Node)
- Refactored folder structure under `apps/`, `packages/`, `docs/`
- Unified all legacy and modern systems into one monorepo

## Visual Basic Suite
- Tools moved to `packages/legacy-vb/`
- Will be called via Node API using shell wrappers

## Monorepo
- Full CI/CD support, billing, RBAC, feature flags
- Deployment ready: Vercel, Fly.io, Railway

## Integrations
- New `/api/legacy/invoice-process` endpoint added for VB tools