let axios = require('axios')

let httpUrl = 'https://www.doutula.com/article/list/?page=1'
// ip: https://www.kuaidaili.com/free/inha/
// 代理请求
let option = {
  host: '163.204.246.180',
  port: '9999'
}
axios.get(httpUrl, option).then(res => {
  console.log(res.data)
})