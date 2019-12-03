const router = require('koa-router')()
const md5 = require('md5-node')
const userServices = require('../controllers/userController')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 测试数据库
router.get('/all', async(ctx, next) => {
  await userServices.getAllUsers().then(res => {
    console.log('result:' + JSON.stringify(res))
    ctx.body = res
  })
})

// 用户注册
router.post('/register', async(ctx, next) => {
  // 获取用户输入的信息
  // console.log(ctx.request.body.phoneNumber)
  var phoneNumber = ctx.request.body.phoneNumber
  var userPassword = ctx.request.body.userPassword
  // console.log(phoneNumber, userPassword)
  // 判断信息是否完整
  if (!phoneNumber || !userPassword) {
    ctx.body = {
      code: '800001',
      message: '电话号码或密码不能为空'
    }
    return
  }
  // 封装用户信息
  let user = {
    phoneNumber: phoneNumber,
    userPassword: md5(userPassword)
  }
  // 判断用户是否以存在
  await userServices.findUserByPhone(user.phoneNumber).then(async res => {
    // console.log('length:', res.length)
    if (res.length) {
      try {
        throw Error('用户已存在')
      } catch (error) {
        console.log(error)
      }
      ctx.body = {
        code: '800002',
        data: 'error',
        message: '用户已存在'
      }
    } else {
      await userServices.register([user.phoneNumber, user.userPassword]).then(res => {
        // console.log('affectedRows', res.affectedRows)
        if (res.affectedRows != 0) {
          ctx.body = {
            code: '800000',
            data: 'success',
            message: '注册成功'
          }
        } else {
          ctx.body = {
            code: '800003',
            data: 'failure',
            message: '注册失败'
          }
        }
      })
    }
  })
})

// 用户登录
router.post('/login', async(ctx, next) => {
  var phoneNumber = ctx.request.body.phoneNumber
  var userPassword = ctx.request.body.userPassword

  await userServices.findUserByPhone(phoneNumber).then(res => {
    if (res.length) {
      let _userPassword = res[0].userPassword
      if (md5(userPassword) !== _userPassword) {
        ctx.body = {
          code: '800001',
          data: '登录失败',
          message: '密码错误'
        }
      } else {
        let result = {
          id: res[0].id,
          phoneNumber: res[0].phoneNumber,
          nickname: res[0].nickname,
          avatar: res[0].avatar,
          birthday: res[0].birthday
        }
        ctx.body = {
          code: '800000',
          data: result,
          message: '登录成功'
        }
      }
    } else{
      ctx.body = {
        code: '800003',
        data: '登录失败',
        message: '该用户不存在'
      }
    }
  }).catch(error => {
    ctx.body = {
      code: '800002',
      data: error
    }
  })
})

module.exports = router
