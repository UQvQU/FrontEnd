const KoaRouter = require('koa-router')
const router = new KoaRouter()
const loginController = require('../controller/login')
const registerController = require('../controller/register')

router.prefix('/api/v1')
console.log('prefix')
// 注册
router.get('/any', async (ctx) => {
  ctx.body = 12345
})
router.post('/login', loginController)
router.get('/register', registerController)

module.exports = router
