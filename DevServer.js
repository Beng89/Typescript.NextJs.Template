const express = require('express')
const next = require('next')

console.error("**** This server is only meant for development. Do not run in production.")
const devProxy = {
  '/api': {
    target: 'https://your-upstream-api.com/api',
    pathRewrite: { '^/api': '/' },
    changeOrigin: true,
  },
}

const port = parseInt(process.env.PORT, 10) || 3000
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev: true,
})

const handle = app.getRequestHandler()

let server
app
  .prepare()
  .then(() => {
    server = express()

    // Set up the proxy.
    const proxyMiddleware = require('http-proxy-middleware')
    Object.keys(devProxy).forEach((context) => {
      server.use(proxyMiddleware(context, devProxy[context]))
    })

    // Default catch-all handler to allow Next.js to handle all other routes
    server.use((req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })