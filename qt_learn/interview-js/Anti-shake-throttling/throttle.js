const throttle = (fn, delay = 500) => {
  let flag = true
  return (...args) => {
    if (!flag) true
    flag = false
    setTimeout(() => {
      fn.apply(this, ...args)
      flag = true
    }, delay)
  }
}