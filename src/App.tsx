import React, { useEffect, useState } from 'react'
import { getItems } from './api/fastapi'
import { getStatus } from './api/nodeapi'

type Item = { id: number; name: string }

export default function App() {
  const [items, setItems] = useState<Item[]>([])
  const [nodeStatus, setNodeStatus] = useState<string>('loading...')

  useEffect(() => {
    getItems()
      .then(setItems)
      .catch(err => {
        console.error(err)
        setItems([])
      })

    getStatus()
      .then(s => setNodeStatus(s))
      .catch(err => {
        console.error(err)
        setNodeStatus('error')
      })
  }, [])

  return (
    <div className="container">
      <h1>Monitoring Frontend</h1>
      <section>
        <h2>Node Service</h2>
        <p>Status: <strong>{nodeStatus}</strong></p>
      </section>

      <section>
        <h2>Items (from FastAPI)</h2>
        {items.length === 0 ? (
          <p>No items — check the API.</p>
        ) : (
          <ul>
            {items.map(i => (
              <li key={i.id}>{i.name} (id: {i.id})</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
