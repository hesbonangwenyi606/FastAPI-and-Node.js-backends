# React + TypeScript Frontend (Vite)

This project is a minimal React + TypeScript frontend scaffold (Vite) that integrates with:

- a **FastAPI** backend at `VITE_FASTAPI_URL` (default `http://localhost:8000`)
- a **Node.js** backend at `VITE_NODE_URL` (default `http://localhost:5000`)

## Features
- Simple UI showing Node service status and items fetched from FastAPI.
- Environment-configurable API base URLs via Vite env vars (`VITE_FASTAPI_URL`, `VITE_NODE_URL`).
- Dockerfile to build a production image and serve with `serve`.

## Quick start (local)
1. Copy `.env.example` to `.env` and edit if needed.
2. Install dependencies:
   ```bash
   npm ci
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   npm run preview
   ```

## Docker
Build and run:
```bash
docker build -t react-frontend .
docker run -p 3000:3000 --env VITE_FASTAPI_URL=http://host.docker.internal:8000 --env VITE_NODE_URL=http://host.docker.internal:5000 react-frontend
```

## Notes
- When running the frontend inside Docker and your APIs on the host machine, you may need to set `VITE_FASTAPI_URL` / `VITE_NODE_URL` to `host.docker.internal` (Docker Desktop) or the appropriate host IP.
# FastAPI-and-Node.js-backends
