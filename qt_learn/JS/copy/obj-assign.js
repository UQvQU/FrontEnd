if (typeof Object.assign2 != 'function') {
  Object.defineProperty(Object, 'assign2', {
    value: function (target) {
      'use strict'
      if (target == null || target == undefined) {
        throw new TypeError('Cannot convert undefined or null to object')
      }

      var to = Object(target)

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index]

          if (nextSource != null) {
            // for (var nextKey in nextSource) {
            //   console.log('nextKey:', nextKey)
            //   if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            //     to[nextKey] = nextSource[nextKey]
            //   }
            // }

            // 判断nextKey 是否是nextSource 自身的属性
            for (var nextKey of Object.getOwnPropertyNames(nextSource))
              to[nextKey] = nextSource[nextKey]
          }
      }
      return to
    },
    writable: true,
    configurable: true
  })
}

let a = {
  name: 'tt',
  age: 18
}
let b = {
  name: 'www',
  book: {
    title: "You don't know JS",
    price: '55'
  },
  avatar: null
}

let c = Object.assign2(a, b)
console.log(c)