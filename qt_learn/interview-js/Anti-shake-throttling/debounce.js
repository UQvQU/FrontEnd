// 防抖：一直持续点击将无法发送请求，知道点击结束后方才发送请求
// 节流：即便用户一直持续点击，也是每隔一定的时间段发送一次请求

// 需要防抖的fn， 延迟时间delay
const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, ...args)
    }, delay)
  }
}