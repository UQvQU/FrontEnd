var mysql = require('mysql')
var config = require('./defaultConfig')

// 创建线程池
var connectionPool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
})

// 查询顺利执行完，得到查询结果后，断开mysql服务器的连接
var release = connection => {
    connection.end(function(error) {
        if(error) {
            console.log('Connection closed failed.')
        } else {
            console.log('Connection closed succeeded.')
        }
    })
}

// 统一链接数据库的方法
var execQuery = (sql, args) => {
    var results = new Promise((resolve, reject) => {
        connectionPool.getConnection((error, connection) => {
            if (error) {
                console.log("Get connection from mysql pool failed !")
                // throw error;
                reject(error)
            }

            if (!args) {
                connection.query(sql, (error, results) => {
                    if (error) {
                        console.log('Execute query error !')
                        // throw error;
                        reject(error)
                    }
                    resolve(results)
                })
            } else {
                connection.query(sql, args, function (error, results) {
                    if (error) {
                        console.log('Execute query error !');
                        // throw error;
                        reject(error)
                    }
                    resolve(results);
                })
            }

            // 调用connection.release()方法，会把连接放回连接池
            connection.release(function (error) {
                if (error) {
                    console.log('Mysql connection close failed !')
                    reject(error)
                    // throw error;
                }
            })
        })
    })

    return results
}

module.exports = {
    release: release,
    execQuery: execQuery
}
