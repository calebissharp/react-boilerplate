const server = require('./server')

const PORT = process.env.PORT || 8080
const HOST = process.env.IP || '0.0.0.0'

server.listen(PORT, HOST, () => {
  console.log('Server listening on http://' + HOST + ':' + PORT + '/')
})
