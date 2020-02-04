const http = require('http')
const path = require('path')
const fse = require('fs-extra')
const multiparty = require('multiparty')

const server = http.createServer()
const UPLOAD_DIR = path.resolve(__dirname, '.', 'target')

server.on('request', async (req, res) => {
  // 跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.end('hello')

  if (req.url == '/') {
    // 获取post请求传递的表单数据
    const multipart = new multiparty.Form()
    // console.log(multipart)
    multipart.parse(req, async (err, fields, files) => {
      if (err) {return}

      console.log('files', files)
      // 获取文件块
      const [chunk] = files.chunk
      // 文件名
      const [fileName] = fields.fileName
      console.log(fields, fileName)
      const dirName = fileName.split('-')[0]
      const chunkDir = path.resolve(UPLOAD_DIR, dirName)
      // E:\workspaces\qt_learn\qt_learn\vue\big_file_upload\server\target\yb
      if (!fse.existsSync(chunkDir)) {
        // 创建目录
        await fse.mkdirs(chunkDir)
      }
      // 将chunk文件移入target/yb文件夹中
      // path:chunk临时存放地址
      // fileName: chunk 文件名
      await fse.move(chunk.path, `${chunkDir}/${fileName}`)
    })
  } else if (req.url == '/merge') {
    res.end('OK')
  }
})

server.listen(3000, () => {console.log('正在聆听3000端口')})
