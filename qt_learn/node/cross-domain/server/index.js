const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const path = require('path')

const app = new Koa()
app.use(KoaStatic(path.join(__dirname, './static')))

var router = new KoaRouter();
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  ctx.set('Access-Control-Allow-Headers', 'X-custume, Content-Type')
  // 
  ctx.set('Access-Control-Allow-Credentials', true)
  await next()
})
 
router.post('/api/books', (ctx, next) => {
  // ctx.router available
  // ctx.set('Access-Control-Allow-Origin', '*')
  // ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  // ctx.set('Access-Control-Allow-Headers', 'X-custume, Content-Type')
  ctx.body = [
    {bookName: 'php 入门到放弃'},
    {bookName: 'node 入门到静通'}
  ]
});
 
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
  console.log('server is running http://localhost:3001')
})