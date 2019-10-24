const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaView = require('koa-views')
const path = require('path')
const router = KoaRouter()
const bodyParser = require('koa-bodyparser')
const jwt =  require('jsonwebtoken')
const app = new Koa()
app.use(bodyParser())

// koa-views 中间件 与 ejs配合使用
app.use(KoaView(path.join(__dirname, 'views'), {extension: 'ejs'}))
router.get('/', async (ctx) => {
  // ctx.body = `html`    复杂
  const userInfo = { userName: 123, sex: 0, hobby: [1, 2, 3]}
  // 服务端渲染 + spa = 同构
  await ctx.render('index', {
    ...userInfo
  })
})

router.get('/login', async (ctx) => {
  await ctx.render('login')
})

router.post('/login', async (ctx) => {
  const data = ctx.request.body
  if (data.userName === '123' && data.pwd === '456') {
    // 生成token
    // jwt 解决了 传递数据 加密功能
    // jwt: 加密算法 + payload(数据，时间等自由发挥) + 签名
    const token = jwt.sign({uid: 000}, 'secret', {
      expiresIn: 60
    })
    ctx.body = {
      code: 200,
      token: token
    }
  }
})

router.get('/401', async (ctx) => {
  await ctx.render('401');
})
router.get('userCenter', async (ctx) => {
  await ctx.render('userInfo')
})
router.get('/userInfo', async (ctx, next) => {
  // 同步验证
	const auth = ctx.request.headers['authorization'];
  const token = auth.split(' ')[1];
  try {
		//解码取出之前存在payload的user_id 和 name
    const payload = jwt.verify(token, 'secret');
    console.log('payload———', payload);
		ctx.user_id = payload.id;
		await next()
	} catch (err) {
    ctx.body = {
      code: 300
    }
	}
}, async (ctx) => {
  ctx.body = {
    code: 200,
    name: 123,
    id: 1
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3005, () => {
  console.log('server is running in 3005')
})