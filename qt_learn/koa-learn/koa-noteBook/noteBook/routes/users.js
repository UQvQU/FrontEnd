const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async(ctx, next) => {
  await userService.getAllUsers()
  .then((res) => {
    console.log('打印结果' + JSON.stringify(res))
    ctx.body = res
  })
})
// 注册
router.post('/userRegister', async(ctx, next) => {
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd
  var _nickname = ctx.request.body.nickname
  console.log(_nickname)
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '800001',
      mess: "用户名昵称密码不能为空"
    }
    return
  }
  // 获取用户信息
  let user = {
    username: _username,
    userpwd: _userpwd,
    nickname: _nickname
  }
  // 根据username查询用户
  await userService.findUser(user.username).then(async (res) => {
    if (res.length) {
      try {
        throw Error("用户名已存在")
      } catch (error) {
        console.log(error)
      }
      ctx.body = {
        code: '800003',
        data: 'err',
        mess: '用户名已存在'
      }
    } else {
      // 新增用户信息
      await userService.insertUser([user.username, user.userpwd, user.nickname])
        .then((res) => {
          let r = ''
          if (res.affectedRows != 0) {
            r = 'ok'
            ctx.body = {
              code: '800000',
              data: r,
              mess: '注册成功'
            }
          } else {
            r = 'error'
            ctx.body = {
              code: '800004',
              data: r,
              mess: '注册失败'
            }
          }
        })
    }
  })
})
// 写笔记
router.post('/insertNote', async (ctx, next) => {
  console.log('./insertNote')
  var _note_content = ctx.request.body.note_content
  var _head_img = ctx.request.body.head_img
  var _title = ctx.request.body.title
  var _note_type = ctx.request.body.note_type
  var _userId = ctx.request.body.userId
  var _nickname = ctx.request.body.nickname
  console.log(_title,_note_type,_userId,_nickname)
  if (!_title || !_note_type || !_userId || !_nickname) {
    ctx.body = {
      code: '800001',
      mess: "信息不能为空"
    }
    return
  }
  // 获取用户信息
  let note = {
    note_content: _note_content,
    head_img: _head_img,
    title: _title,
    note_type: _note_type,
    userId: _userId,
    nickname: _nickname
  }
  console.log(note)
  // 新增笔记
  await userService.insertNote([note.note_content, note.head_img, note.title, note.note_type, note.userId, note.nickname]).then((res) => {
    let r = ''
    if (res.affectedRows != 0) {
      r = 'ok'
      ctx.body = {
        code: '800000',
        data: r,
        mess: '保存成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '800004',
        data: r,
        mess: '保存失败'
      }
    }
  })
})
// 登录
router.post('/userLogin', async (ctx, next) => {
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd

  await userService.userLogin(_username, _userpwd).then(res => {
    let r = ''
    if (res.length) {
      r = 'ok'
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '800000',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '800004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: '800002',
      data: err,
    }
  })
})
// 根据分类名称查找对应的列表
router.post('/findNoteListByType', async(ctx, next) =>{
  let note_type = ctx.request.body.note_type
  console.log(note_type)
  await userService.findNoteListByType(note_type)
    .then(async (res) =>{
      console.log(res)
      let r = ''
      if(res.length){
        r='ok'
        ctx.body = {
          code : '800000',
          data: res,
          mess: '查找成功'
        }
      } else {
        r = 'error'
        ctx.body = {
          code : '800004',
          data: r,
          mess: '查找失败'
        }
      }
    }).catch((err) =>{
      ctx.body = {
        code: '800002',
        data: err
      }
    })
})
// 根据
router.post('/findNoteDetailById',async(ctx,next) => {
  let id = ctx.request.body.id
  await userService.findNoteDetailById(id)
    .then(async(res) => {
        let r = ''
        if (res.length){
          r = 'ok'
          ctx.body = {
            code: '800000',
            data: res[0],
            mess: '查找成功'
          }
        } else{
          r = 'error'
          ctx.body = {
            code: '800004',
            data: r,
            mess: '查找失败'
        }
      }
    }).catch((err) =>{
      ctx.body = {
        code: '800002',
        data: err
      }
    })
})

module.exports = router
