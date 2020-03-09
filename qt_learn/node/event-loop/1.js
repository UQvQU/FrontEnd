const fs = require('fs');

fs.readFile('./timeout.js', () => {
  // poll阶段 -> check ->
  setTimeout(() => {
   console.log('setTimeout') 
  });
  setImmediate(() => {
    console.log('setImmediate')
  })
})

// 输出：
// setImmediate
// setTimeout

