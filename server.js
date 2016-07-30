const express = require('express')
const app = express()

app.use(express.static('public'))

const PORT = process.env.port || 8080
const HOST = process.env.host || '0.0.0.0'

app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT}/`)
})
