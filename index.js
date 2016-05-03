const server = require('./server')

const port = process.env.PORT || 8080
const host = process.env.IP || '0.0.0.0'

server.listen(port, host, () => {
  console.log('Server listening on http://' + host + ':' + port + '/')
})
