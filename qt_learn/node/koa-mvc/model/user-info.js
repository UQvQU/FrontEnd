// md5 密码加密
const md5 = require('md5')
const {query} = require('../util/index.js')
// 用户注册
const insertData = function (val) {
  console.log(val)
  // 数据库 mysql
  // md5: 哈希算法， 输出固定长度且不可逆，同样的密码输出的值是一样的
  let sql = 'insert into user_info( name, password) value (?, ?)'
  return query(sql, [val.name, md5(val.password)])
}
// 查询by name
const queryByName = async (name) => {
  let sql = 'select * from user_info where name = ?'
  return query(sql, [name])
}
module.exports = {
  insertData,
  queryByName
}
