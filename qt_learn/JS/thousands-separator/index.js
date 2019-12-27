// https://www.cnblogs.com/guojikun/p/11195922.html
console.log(parseToMoney(123456.78))
console.log(parseToMoney(123.45678))
console.log(parseToMoney(12345678901))

function parseToMoney(num) {
  num = parseFloat(num.toFixed(3))
  // console.log(num)
  let [integer, decimal] = String.prototype.split.call(num, '.')
  // console.log(integer, decimal)
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,')
  // console.log(integer)
  return integer + ',' + (decimal? decimal : '')
}