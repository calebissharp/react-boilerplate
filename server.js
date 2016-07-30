const express = require('express')
const app = express()

app.use(express.static('public'))

const PORT = 8080 || process.env.port
const HOST = '0.0.0.0' || process.env.host

app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT}/`)
})
