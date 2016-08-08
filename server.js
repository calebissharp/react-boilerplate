const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('dist'))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'))
})

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT}/`)
})
