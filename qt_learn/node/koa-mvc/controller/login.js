const md5 = require('md5')
const userModel = require('../model/user-info')

module.exports = async (ctx) => {
  const {name, password} = ctx.request.body
  const userInfo = await userModel.queryByName(name)
  console.log('userInfo', userInfo)
  if (userInfo.length > 0) {
    // 找到相应用户
    if (md5(password) === userInfo[0]['password']) {
      // 密码正确
      ctx.body = {
        code: 0,
        id: userInfo[0]['id'],
        name: userInfo[0]['name']
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '密码错误'
      }
    }
  } else {
    console.log('用户不存在')
    ctx.body = {
      code: 500,
      msg: '用户不存在'
    }
  }
}