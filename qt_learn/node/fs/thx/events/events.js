const events = require('events')
const fs = require('fs')

let ee = new events.EventEmitter()

ee.on('userOff', (data) => {
  console.log(data, '1、吃饭١١(❛ᴗ❛)')
})

ee.on('userOff', () => {
  console.log('2、happy(๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ❤')
})

ee.on('userOff', () => {
  console.log('3、睡觉(¦3[▓▓] 晚安')
})

let read = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, {flag: 'r', encoding: 'utf-8'}, (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
      // ee.emit('userOff', data)
    }
  })
})

// 方案一
// read('user.txt').then((data) => {ee.emit('userOff', data)})
// 方案二
async function test() {
  let data = await read('user.txt')
  ee.emit('userOff', data)
}
test()