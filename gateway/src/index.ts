import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { HTTPException } from 'hono/http-exception'
import { logger } from 'hono/logger'
import { GeoMiddleware, getGeo } from 'hono-geo-middleware';

import authRoutes from './routes/auth.js'

const app = new Hono().basePath('/api')


app.use('*', logger())
app.use('*', cors())
app.use('*', GeoMiddleware());


app.use('*', async (c, next) => {
  const authHeader = true
  if (!authHeader) {
    throw new HTTPException(401, { message: 'Unauthorized' })
  }
  await next()
}, async (c, next) => {
  const geo = getGeo(c)
  console.log(geo)
  await next()
})

app.get('/', (c) => {
  return c.json({
    message: "Hello Gateway"
  })
})

app.route('/auth', authRoutes)

serve({
  fetch: app.fetch,
  port: 4000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
