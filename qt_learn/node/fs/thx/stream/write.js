const fs = require('fs')

// 读取或写入的内容过大（大于内存空间），使用文件流

// 写入流
let ws = fs.createWriteStream('hello.txt', {flag: 'w', encoding: 'utf-8'})

// 监听
ws.on('open', () => {
  console.log('1文件已打开')
})
ws.on('ready', () => {
  console.log('2已准备写入')
})
ws.on('close', () => {
  console.log('5文件已关闭')
})

// 保证顺序
ws.write('1hello world!\n', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('3文件流入完成')
  }
})
ws.write('2hello world!\n', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('3文件流入完成')
  }
})
ws.write('3hello world!\n', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('3文件流入完成')
  }
})
ws.write('4hello world!\n', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('3文件流入完成')
  }
})


ws.end(() => {
  console.log('4文件流入关闭')
})