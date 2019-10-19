const userModel = require('../model/user-info')

const register = async (ctx) => {
  // register?name=123&password=456
  console.log('registerController')
  const user = ctx.query
  console.log(user)
  // 插入数据库
  // let insertRes = await userModel.insertData(user)
  let insertRes = await userModel.insertData(user)
  console.log('插入数据库结果', insertRes)
  ctx.body = insertRes
}
module.exports = register
