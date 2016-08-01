const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'))
})

const PORT = process.env.port || 8080
const HOST = process.env.host || '0.0.0.0'

app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT}/`)
})
