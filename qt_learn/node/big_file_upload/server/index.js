// 将yb文件夹中的切片文件合并,生成yb.jpeg
const path = require('path')
const  fse = require('fs-extra') // fs 扩展包

// 合并文件
const UPLOAD_DIR = path.resolve(__dirname, '.', 'target')
console.log(UPLOAD_DIR)
const fileName = 'yb'
const filePath = path.resolve(UPLOAD_DIR, '..', `${fileName}.jpeg`)
console.log(filePath)

const pipeStream = (path, writeStream) => 
  new Promise(resolve => {
    // 创建可读流
    const readStream = fse.createReadStream(path)
    // 读取完毕
    readStream.on('end', () => {
      // 读取完成后删除切片文件
      fse.unlinkSync(path)
      resolve()
    })
    // 进入可写流
    readStream.pipe(writeStream)
  })

const mergeFileChunk = async (filePath, fileName, size) => {
  // 大文件上传：每个需要上传的文件，先以文件名为target目录名，把blob类型文件放在该目录下
  // node进行文件合并
  const chunkDir = path.resolve(UPLOAD_DIR, fileName)
  console.log(chunkDir)
  // 读取yb文件夹下的所有文件
  const chunkPaths = await fse.readdir(chunkDir)
  // 根据index序号进行排序(文件上传前已经加上index序号)
  chunkPaths.sort((a, b) => a.split('-')[1] - b.split('-')[1])
  console.log(chunkPaths) // [ 'yb-0', 'yb-1', 'yb-2' ]
  // 每个chunkPath内容写入
  await Promise.all(
    chunkPaths.map((chunkPath, index) => {
      pipeStream(
        path.resolve(chunkDir, chunkPath), 
        fse.createWriteStream(filePath, {
          start: index * size,
          end: (index + 1) * size
        })
      )
    })
  )
  console.log('合并成功')
  // 合并完成后删除yb目录
  // fse.rmdirSync(chunkDir)
}
mergeFileChunk(filePath, fileName, 0.5*1024*1024) // 0.5M
