function pageCount() {
  console.log(window.location.href, '+1')
}

window.addEventListener('hashchange', pageCount)
// history
// popstate 检测部分操作
window.addEventListener('popstate', pageCount)


let hooks = ['pushState', 'replaceState']
hooks.forEach(hook => {
  let method = window.history[hook]
  // 修改window.history['pushState']
  window.history[hook] = function (...args) {
    setTimeout(pageCount, 0)
    // 恢复
    return method.apply(window.history, args)
  }
})
