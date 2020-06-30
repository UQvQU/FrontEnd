let os = require('os')
// cpu内核
console.log(os.cpus())
// 内存
console.log(os.totalmem())
// 系统架构
console.log(os.arch())
// 剩余内存
console.log(os.freemem())
// 系统平台
console.log(os.platform())