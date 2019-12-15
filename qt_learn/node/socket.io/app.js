var fs = require('fs')
var http = require('http')

var server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    // 请求头
    res.writeHead(200, { "Content-type": "text/html"})
    // 读取
    const myReadStream = fs.createReadStream(__dirname + '/views/http_demo.html', 'utf-8')
    // 输出
    myReadStream.pipe(res)
  }
})

// 将socket.io作用于server上
var io = require('socket.io')(server)
io.on('connection', socket => {
  // 客户端发起socket请求，则输出 socket success
  console.info('socket success')
  // 接受
  socket.on('link_to_server', msg => {
    console.info(`server接收到的是：${msg}`)
    // 回应
    socket.emit('link_to_client', msg)
    // io.emit('link_to_client', msg)
  })
})

server.listen(8888)
console.info('server is running in 8888')
