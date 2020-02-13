const http = require('http')
// 充分利用服务器
const numCPUS = require('os').cpus().length
console.log(numCPUS)
const cluster = require('cluster')

// 主进程 调度子进程
if (cluster.isMaster) {
  // 无需为我们响应服务
  for (let i = 0; i < numCPUS; i++) {
    cluster.fork()
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200)
    res.end(`hello world ${process.pid}`)
  }).listen(3002)
}