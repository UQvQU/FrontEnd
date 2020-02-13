const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  res.setHeader('Access-Controll-Allow-Origin', '*')
  res.setHeader('Access-Controll-Allow-Headers', '*')
  setTimeout(() => {
    res.end('hello')
  }, 1000)
})

server.listen(3001, () => {
  process.title = '进程'
  console.log('3333进程id', process.pid)
})