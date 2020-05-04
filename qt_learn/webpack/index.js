// 循环引用
let a = {tt: 11}
a.t = a
let m = new Map()
function cloneDeep(obj, map) {
  let t = {};
  if (map.get(obj)) {
    return map.get(obj)
  }
  map.set(obj, t)
  Object.keys(obj).forEach(k => {
    if (typeof obj[k] === 'object') {
      t[k] = cloneDeep(obj[k])
    } else {
      t[k] = obj[k];
    }
  })
  return t
}
console.log(m)
console.log(cloneDeep(a, m))