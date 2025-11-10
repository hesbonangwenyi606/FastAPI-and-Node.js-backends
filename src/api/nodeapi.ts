import { NODE_BASE } from './config'

export async function getStatus() {
  const res = await fetch(`${NODE_BASE}/api/v1/status`)
  if (!res.ok) throw new Error('Failed to fetch status')
  const json = await res.json()
  return json.status || JSON.stringify(json)
}
