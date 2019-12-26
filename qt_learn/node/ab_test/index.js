// 开启子进程 调用多核能力
const cluster = require('cluster')
const os = require('os')
// console.log(os.cpus().length)
if (cluster.isMaster) {
  // 主进程
  for (let i = 0; i < os.cpus().length; i++) {
    // 遍历所有cpu
    // 启动一个子进程
    cluster.fork()
  }
} else {
  require('./app')
}