/**
 * IO
 */
//fs：node后端file system文件模块
// require：模块引入机制
const fs = require('fs');    
//创建一个可读流, 通过pipe管道输出
// process.stdout 一种输出设备  交互  process:node的进程  stdout：输出 stdin：输入
fs.createReadStream('./sample.txt').pipe(process.stdout);
