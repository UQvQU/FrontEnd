// function cloneShallow(source) {
//   var target = {}
//   for (let key in source) {
//     // 判断当前属性是否是source本身就有的属性
//     if (Object.prototype.hasOwnProperty.call(source, key)) {
//       // 浅拷贝(不拷贝继承过来的属性)
//       target[key] = source[key]
//     }
//   }
//   return target
// }


// 仅深拷贝对象(数组无法深拷贝)
function cloneShallow(source) {
  var target = {}
  for (let key in source) {
    // 判断当前属性是否是source本身就有的属性
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object') {
        target[key] = cloneShallow(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

// 深拷贝 (symbol null 都无法拷贝)
function cloneDeep(source) {
  // 不是对象，直接复制
  if (typeof source !== 'object') return source

  var target = Array.isArray(source) ? [] : {}
  for (let key in source) {
    console.log('key:', key)
    // 判断当前属性是否是source本身就有的属性
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object') {
        target[key] = cloneDeep(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

// 深拷贝(入栈，非递归)
function cloneDeep2(source) {
  const root = Array.isArray(source) ? [] : {}

  // 建栈
  const loopList = [
    {
    parent: root,
    key: undefined,
    data: source
    }
  ]

  while(loopList.length) {
    console.log(loopList.length)
    // 出栈
    const node = loopList.pop()
    const parent = node.parent
    const key = node.key
    const data = node.data

    // 初始化赋值目标， key为undefined 则拷贝到父元素，否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key] = Array.isArray(data) ? [] : {}
    }

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环 ， 入栈
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root
}

let a = [0, '1', [2, 3]]
let b = {
  name: 'www',
  book: {
    title: "You don't know JS",
    price: '55'
  },
  avatar: null
}

// let c = cloneShallow(b)
let c = cloneDeep2(b)
b.name = 'tt'
b.book.price = '44'

a[1] = '22'
a[2][0] = 4
console.log(b, c)
