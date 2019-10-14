// 回调
// promise
// generator
// async 定义函数的一个关键词

// async () => {
//   // await 接 promise
//   let a = await Promise()
//   // a resolve 时的值
//   // resolve结束后继续往下执行
// }

const Koa = require('koa')
const KoaBody = require('koa-body')
const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const app = new Koa()

// 第三方中间件 koa-body 处理表单请求
// koaBody 是基于formidable
app.use(KoaBody({
  // 表单编码 是否进行文件读取
  multipart: true,
  formidable: {
    // 200M
    maxFieldsSize: 200 * 1024 * 1024,
    // 保持文件格式
    keepExtensions: true,
    // 上传路径
    uploadDir:  path.join(__dirname, '/static/images')
  }
}))
app.use(async (ctx, next) => {
  // http://localhost:3000/ 上传文件表单
  // http://localhost:3000/upload 处理表单
  const method = ctx.method
  const path = ctx.path
  console.log(method, path)
  if (method === 'GET' && path === '/') {
    ctx.body = `
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="avatar">
      <input type="submit" value="提交">
    </form>`
  } else if (method === 'POST' && path === '/upload') {
      console.log(ctx.request.files)
      // fs.readdir()   非promise风格
      const readdir = promisify(fs.readdir)
      const files = await readdir('./static/images/', 'utf8')
      const htmlTemplate = files.map(file => {
        return `
        <li>
          <a href="/static/images/${file}">${file}</a>
        </li>`
      }).join('')
      ctx.body = htmlTemplate
  }
})

app.listen(3001, () => {
  console.log('server is running 3001')
})