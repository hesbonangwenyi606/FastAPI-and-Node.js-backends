import { FASTAPI_BASE } from './config'

export async function getItems() {
  const res = await fetch(`${FASTAPI_BASE}/api/v1/items`)
  if (!res.ok) throw new Error('Failed to fetch items')
  return res.json() as Promise<Array<{ id: number; name: string }>>
}
