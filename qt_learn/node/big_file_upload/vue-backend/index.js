const http = require("http");
const server = http.createServer();
const Controller = require('./controller');
const controller = new Controller();

server.on("request", async (req, res) => {
  // 跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  // post传输json时需声明一下以便获取数据
  if (req.method === 'OPTIONS') {
    res.status = 200;
    res.end();
    return;
  }

  if (req.url == '/verify') {
    await controller.handleVerifyUpload(req, res)
  }
})

server.listen(3000, () => console.log('server running in 3000'));