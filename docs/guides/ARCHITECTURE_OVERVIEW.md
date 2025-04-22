
# System Architecture

- Frontend: Next.js + TailwindCSS
- Backend: Supabase (Postgres + Auth + Storage)
- AI Services: OpenAI, Tesseract.js
- CI/CD: GitHub Actions / Docker
- Deployment: Docker Compose / Supabase Hosting

## Diagram
[Frontend] <---> [Supabase API] <---> [Database + Storage]
                   |
                [AI APIs]
