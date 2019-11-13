function add(a, b) {
  return a + b
}

// var curry = function(fn) {
//   console.log(arguments)
//   // 去除第一位
//   var args = [].slice.call(arguments, 1)  // [1, 2]
//   console.log('args', args)
//   return function() {
//     // [].slice.call(arguments) 为空
//     var newArgs = args.concat([].slice.call(arguments))  // [1, 2]
//     console.log('newArgs', newArgs)
//     console.log('fn', fn)
//     return fn.apply(this, newArgs)   // add.apply(this, [1, 2])
//   }
// }


function sub_curry(fn) {
  console.log('sub_arguments', arguments)
  // fn = arguments[0]
  var args = [].slice.call(arguments, 1)
  console.log('sub_args', args)
  return function() {
    return fn.apply(this, args.concat([].slice.call(arguments)))
  }
}

function curry(fn, length) {
  // console.log('fn', fn)
  console.log('length1', length)
  length = length || fn.length
  console.log('length2',length)

  var slice = Array.prototype.slice

  return function() {
    // 参数不完整
    console.log('arguments', arguments)
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments))
      console.log('combined', combined)
      return curry(sub_curry.apply(this, combined), length - arguments.length)
    } else {
      // 参数已传完
      return fn.apply(this, arguments)
    }
  }
}

var fn = curry(function(a, b, c) {
  return [a, b, c]
})
console.log(fn(1)(2)(3))
// console.log(fn(1)(2))
// var f = fn(1)(2)
// console.log(fn(1)(3))
// 随意传参
// var addCurry = curry(add, 1, 2)

// var addCurry = curry(add)
// console.log(addCurry(1, 2))


// 终极版
function curry(fn, args) {
  length = fn.length;
  args = args || [];

  return function() {
    var _args = args.slice(0),
        arg, i;
    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      _args.push(arg);
    }
    if (_args.length < length) {
      return curry.call(this, fn, _args);
    }
    else {
      return fn.apply(this, _args);
    }
  }
}
