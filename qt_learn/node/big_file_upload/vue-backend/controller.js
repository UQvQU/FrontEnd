const path = require("path");
const fse = require("fs-extra");

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
}