const http = require('http')
const httpServer = http.createServer((req, res) => {
  console.log('req', req.url);
  res.end('http res')
  throw new Error('error')
})
let a;
process.on('message', function(name, socketServer) {
  if (name === 'server') {
    a = socketServer;
    a.on('connection', socket => {
      httpServer.emit('connection',socket)
    })
  }
})
process.on('uncaughtException', error => {
  console.log(error)
  process.send({act: 'dead'})
})