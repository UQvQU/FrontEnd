const fs = require('fs')

let rs = fs.createReadStream('story.txt', {flags: 'r', encoding: 'utf-8'})
let ws = fs.createWriteStream('s2.txt', {flags: 'w', encoding: 'utf-8'})
// console.log(rs)

rs.on('open', () => {
  console.log('被读取的文件已打开')
})
rs.on('close', () => {
  console.log('被读取的文件已关闭')
})
// 监听每一次数据流入完成
rs.on('data', (chunk) => {
  console.log('每批读取的数据', chunk.length)
  // console.log(chunk)
  ws.write(chunk.length + '\n' + chunk, () => {
    console.log('单批输入流入完成')
  })
})
rs.on('end', () => {
  ws.end()
  console.log('文件流关闭')
})