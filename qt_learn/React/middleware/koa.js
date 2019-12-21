// 洋葱模型：KOA中间件如何运行 -- 递归

let middleWare1 = async function (ctx, next) {
  console.log('1')
  await next()
  console.log('2')
}
let middleWare2 = async function (ctx, next) {
  console.log('3')
}



let middleWares = [middleWare1, middleWare2]
run()
function run() {
  // 将中间件串起来
  const dispatch = (index) => {
    const fn = middleWares[index]
    // next()  递归 fn(ctx, next)
    fn({}, () => {
      dispatch(index + 1)
    })
  }
  dispatch(0)
}