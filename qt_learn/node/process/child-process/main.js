// web worker 计算hash 创建线程
const http = require('http')
const fork = require('child_process').fork

http.createServer((req, res) => {
    // 大数计算另开新进程
  const compute = fork('./fork_compute.js')
  compute.send('开启一个新进程')
  compute.on('message', sum => {
    res.end(`和为${sum}`)
  })

}).listen(3001, () => {
  console.log(process.pid)
})