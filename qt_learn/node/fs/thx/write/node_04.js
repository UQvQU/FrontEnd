let fs = require('fs')

// flag: 'w' => 写入会覆盖之前的内容
// flag:'a' =>  打开文件用于追加，持续写入，不覆盖之前写入的内容
fs.writeFile('test.txt', '我乖o(*^＠^*)o\n', {flag: 'a', encoding: 'utf-8'}, (error) => {
  if (error) {
    console.log('写入错误')
  } else {
    console.log('写入成功')
  }
})


// 封装   多个异步写入的操作同时进行，无法保证写入的顺序 
let write = (path, content) => new Promise((resolve, reject) => {
  fs.writeFile(path, content, {flag: 'a', encoding: 'utf-8'}, (error) => {
    if (error) {
      console.log('写入错误')
      reject(error)
    } else {
      console.log('写入成功')
      resolve('success')
    }
  })
})

async function writeList (path) {
  await write(path, '什么时候吃饭呀(⊙_⊙)?\n')
  await write(path, '马上就开发啦，乖呀(,,´•ω•)ノ"(´っω•｀。)\n')
  await write(path, '我乖o(*^＠^*)o\n')
}
// 当文件不存在是会新建一个文件
writeList('write.txt')

// 删除文件或符号链接
fs.unlink('write.txt', () => {
  console.log('删除成功')
})