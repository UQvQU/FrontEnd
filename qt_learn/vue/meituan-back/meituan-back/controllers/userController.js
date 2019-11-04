var service = require('../utils/mysqlUtil')

// 读取所有用户信息
let getAllUsers = function () {
  let sql = `select * from users;`
  return service.execQuery(sql)
}
// 注册
let register = function (value) {
  let sql = `insert into users set phoneNumber=?, userPassword=?;`
  // console.log('register')
  return service.execQuery(sql, value)
}
// 根据号码查询用户信息
let findUserByPhone = function (phoneNumber) {
  let sql = `select * from users where phoneNumber = "${phoneNumber}";`
  return service.execQuery(sql)
}

module.exports = {
  getAllUsers,
  register,
  findUserByPhone
}