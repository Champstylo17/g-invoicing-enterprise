# Troubleshooting Guide

## 🐳 Docker Issues
- Check if ports 3000, 3001, 5432, and 80 are open.
- Use `docker-compose ps` to verify containers.
- Rebuild if necessary: `docker-compose up --build`.

## 🔐 Supabase Issues
- Ensure API keys are loaded in `.env`.
- Check table RLS (Row Level Security) policies.

## 📡 Network Errors
- Verify your NGINX reverse proxy is routing `/api` to port 3001.