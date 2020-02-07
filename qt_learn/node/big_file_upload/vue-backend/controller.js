const path = require("path");
const fse = require("fs-extra");
const multiparty = require("multiparty");

const UPLOAD_DIR = path.resolve(__dirname, "..", "target");

const extractExt = fileName => fileName.slice(fileName.lastIndexOf("."), fileName.length);

const resolvePost = req => new Promise(resolve => {
  // post请求
  let chunk = "";
  // 获取请求过来的数据
  req.on("data", data => {
    // 二进制
    chunk += data;
  })
  req.on("end", () => {
    console.log('end', chunk);
    // 还原字符串化后的数据
    resolve(JSON.parse(chunk));
  })
})

const pipeStream = (path, writeStream) =>
  new Promise(resolve => {
    const readStream = fse.createReadStream(path);
    readStream.on('end', () => {
      resolve();
    });
    // 写入
    readStream.pipe(writeStream);
  });

const mergeFileChunk = async (filePath, fileHash, size) => {
  // 目录
  const chunkDir = path.resolve(UPLOAD_DIR, fileHash);
  // 读取目录下的文件
  const chunkPaths = await fse.readdir(chunkDir);
  // 排序
  chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
  await Promise.all(
    // 遍历chunkDir中的所有切片文件
    chunkPaths.map((chunkPath, index) => 
      pipeStream(
        path.resolve(chunkDir, chunkPath),
        fse.createWriteStream(filePath, {
          start: index * size,
          end: (index + 1) * size
        })
      )
    )
    // 将切片文件写入到filePath中
    // ......\target\24b42dbd786fbd1bcdac21be9c77de70.jpeg
  )
}

module.exports = class {
  async handleVerifyUpload(req, res) {
    // 判断服务器端有没有该文件
    const data = await resolvePost(req);
    const { fileName, fileHash } = data;
    // 获取文件名
    const ext = extractExt(fileName);
    // hash值代替文件名
    const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`);
    console.log(filePath);
    if (fse.existsSync(filePath)) {
      // 上传的文件已存在，无需再上传
      res.end(JSON.stringify({
        shouldUpload: false
      }))
    } else {
      // 若该文件不存在，则应上传
      res.end(JSON.stringify({
        shouldUpload: true,
        uploadedList: []
      }))
    }
  }
  async handleFormData(req, res) {
    // multiparty 处理带有文件上传的表单
    const multipart = new multiparty.Form();
    multipart.parse(req, async (err, fields, files) => {
      if (err) {
        res.status = 500;
        res.end("process file chunk failed");
        return;
      }

      const [chunk] = files.chunk;
      const [hash] = fields.hash;
      const [fileHash] = fields.fileHash;
      const [fileName] = fields.fileName;
      // console.log(chunk, hash, fileHash, fileName);
      const chunkDir = path.resolve(UPLOAD_DIR, fileHash);
      const filePath = path.resolve(chunkDir, `${fileHash}${extractExt(fileName)}`);
      // console.log('filePath', filePath, 'chunkDir', chunkDir)
      if (!fse.existsSync(chunkDir)) {
        // 如果目录地址中无target文件夹
        await fse.mkdirs(chunkDir);
      }
      if (fse.existsSync(filePath)) {
        res.end("file exist");
        return;
      }
      // 将上传的切片文件移入chunkDir文件夹中
      await fse.move(chunk.path, path.resolve(chunkDir, hash));
      res.end("received file chunk");   
    })
  }
  async handleMerge(req, res) {
    const data = await resolvePost(req);
    const { fileHash, fileName, size} = data;
    const ext = extractExt(fileName);
    const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`);
    console.log('filePath', filePath);
    await mergeFileChunk(filePath, fileHash, size);
    res.end(
      JSON.stringify({
        code: 0,
        message: "file merged success"
      })
    )
  }
}