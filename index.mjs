import net from 'node:net'
import { once } from 'node:events'
import pTimeout from 'p-timeout'

const res = await fetch('https://api.siacentral.com/v2/hosts/list')
if (!res.ok) {
  throw new Error(`Cannot fetch: ${res.status}`)
}

const body = await res.json()
for (const host of body.hosts) {
  const start = new Date()
  try {
    const client = net.createConnection({
      host: host.net_address.split(':')[0],
      port: host.net_address.split(':')[1]
    })
    await pTimeout(once(client, 'connect'), {
      milliseconds: 5_000
    })
    client.on('error', () => {})
    client.destroy()
    console.log({ node: host.net_address, trending_ttfb: new Date() - start })
  } catch (error) {
    console.log({ node: host.net_address, error: error.message })
  }
}
