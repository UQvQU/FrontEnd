// node event-loop

// timer 回调到期
setTimeout(() => {
  console.log(0)
})
// check
setImmediate(() => {
  console.log(1)
})

// 输出无法保证