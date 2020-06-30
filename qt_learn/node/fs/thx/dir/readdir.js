let fs = require('fs')
let {fsRead, fsWrite} = require('./module')

const txtPath = 'all.txt'
fs.readdir('../read', (err, files) => {
  if (err) {
    console.log(err)
  } else {
    console.log(files)
    // 将../thx目录下的文件的所有内容合并到all.txt中
    files.forEach(async (fileName, i) => {
      let content = await fsRead('../read/' + fileName)
      await fsWrite(txtPath, content)
    })
  }
})

fs.rmdir('rmdir', () => {
  console.log('删除成功')
})