const add  = (a, b, c) => a + b + c;
    
    function curry(fn) {
      let allArgs = [];
      let len = fn.length;
      // console.log('len', fn.length)
      // 闭包：访问函数外的变量allArgs
      return function next(...args) {
        allArgs = allArgs.concat(args);
        // console.log('all', allArgs)
        if (allArgs.length >= len) {
          // 清空
          // console.log('allArgs', allArgs)
          let temp = allArgs
          allArgs = []
          // 所有参数拼接完,运行add函数
          return fn(...temp)
        } else {
          // 参数未接受完，继续接受参数
          return next;
        }
      }
    }
    let curriedAdd = curry(add)
    console.log(curriedAdd(1, 2)(3))
    console.log(curriedAdd(1)(2)(3))
    console.log(curriedAdd(1)(2, 3))