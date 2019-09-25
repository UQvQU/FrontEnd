let obj = {
  a: 'aaa',
  b: 'bbb',
  c: 'ccc',
  [Symbol('d')]: 'ddd'
}

Object.defineProperty(obj, 'e', {
  value: 'eee',
  // 是否可枚举 ，默认为false
  enumerable: true
})

// 枚举 Object.keys()
// 返回 []
console.log(Object.keys(obj))
console.log(Object.values(obj))
// for in
for (key in obj) {
  // 返回string
  console.log(typeof key, key, obj[key])
}