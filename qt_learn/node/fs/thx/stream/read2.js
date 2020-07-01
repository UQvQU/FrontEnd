const fs = require('fs')

let rs = fs.createReadStream('story.txt', {flags: 'r', encoding: 'utf-8'})
let ws = fs.createWriteStream('s3.txt', {flags: 'w', encoding: 'utf-8'})
// console.log(rs)

rs.on('open', () => {
  console.log('被读取的文件已打开')
})
rs.on('close', () => {
  console.log('被读取的文件已关闭')
})

// 直接将读取的数据流入写入流
rs.pipe(ws)

rs.on('end', () => {
  console.log('文件流关闭')
})