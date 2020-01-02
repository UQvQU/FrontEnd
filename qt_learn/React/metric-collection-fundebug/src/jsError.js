// 捕获异步事件
window.addEventListener('error', (e) => {
  console.log('js错误', e)
  e.preventDefault()   // 控制台不报错
})

window.addEventListener('error', e => {
  console.log('资源错误', e)
  e.preventDefault()   // 控制台不报错
}, true) // 捕获时执行事件绑定

window.addEventListener('unhandledrejection', (err) => {
  console.log('err', err)
})