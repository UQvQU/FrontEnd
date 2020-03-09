// 组合
// koa-递归   redux-compose
const add1 = x => x + 1
const sub20 = x => x - 20
const mul10 = x => x * 10

// 将上面的功能组合在一起
// const res = mul10(sub20(add1()))

const compose = (...args) => args.reduceRight((fna, fnb) => (...params) => {
  console.log('fa', fna)
  console.log('fb', fnb)
  console.log('param', params)
  return fnb(fna(...params))
})

const fn = compose(add1, sub20, mul10)
console.log(fn(1))  // -9