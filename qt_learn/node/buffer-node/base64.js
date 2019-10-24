const obj = {alg: 'sha256', type: '123'}

const buf = Buffer.from(JSON.stringify(obj))
console.log(buf)

const base64 = buf.toString('base64')
console.log(base64)

const buf2 = Buffer.from(base64, 'base64')
console.log(buf2)

console.log(buf2.toString('utf8'))

const fs = require('fs')
fs.readFile('./readme.md', (err, buf3) => {
  console.log(buf3)
})