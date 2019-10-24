const crypto = require('crypto')
let abc = 'helloWorld'
const sign = crypto.createHmac('sha256', 'abc').update(abc).digest('base64')
console.log(sign)