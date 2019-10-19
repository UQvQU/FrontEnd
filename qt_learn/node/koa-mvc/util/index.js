const mysql = require('mysql')
// 连接池
const pool = mysql.createPool({
  user: 'root',
  password: '123456',
  host: '127.0.0.1',
  port: 3306,
  database: 'chat'
})
let query = function (sql, value) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connect) => {
      if (err) reject(err)
      connect.query(sql, value, (err, rows) => {
        if (err) reject(err)
        else resolve(rows)
        // 释放连接
        connect.release()
      })
    })
  })
}
module.exports = {
  query
}