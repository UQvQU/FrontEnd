var service = require('../utils/mysqlUtil')

// 根据userId获取订单信息
let findAllOrdersByUserId = function (userId) {
  let sql = `select * from orders where userId = "${userId}";`
  return service.execQuery(sql)
}
// 添加订单
let insertOrder = function (value) {
  let sql =  `insert into orders set userId=?, productId=?, index=?, count=?;`
  return service.execQuery(sql, value)
}
// 修改订单状态
let updateOrderStatus = function (value) {
  let sql = `update orders set status=? where id=?;`
  return service.execQuery(sql, value)
}

module.exports = {
  findAllOrdersByUserId,
  insertOrder,
  updateOrderStatus
}