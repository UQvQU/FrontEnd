const path = require('path')

let strPath = 'http://m.news.cctv.com/2020/06/30/ARTIMHQpadErlaGgk3rdiXlA200630.shtml'

// 获取扩展名 html
let ext = path.extname(strPath)
console.log(ext)

// 方法会将路径或路径片段的序列解析为绝对路径
let arr = ['dir', 'tt', '/', 'a.html']
// let info = path.resolve(...arr) 无效
let info = path.resolve(__dirname, 'a.html')
// let info = path.resolve('/', 'thx/', 'hello.html')
console.log(info)

// path.join() 方法会将所有给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。
let info2 = path.join(__dirname, ...arr)
console.log(info2)

console.log(__dirname, __filename, path.parse(__filename))

