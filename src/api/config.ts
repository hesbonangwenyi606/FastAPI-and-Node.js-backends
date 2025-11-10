// Base URLs are read from Vite environment variables.
// Defaults point to localhost and ports used in the Docker Compose example.
export const FASTAPI_BASE = import.meta.env.VITE_FASTAPI_URL || 'http://localhost:8000'
export const NODE_BASE = import.meta.env.VITE_NODE_URL || 'http://localhost:5000'
