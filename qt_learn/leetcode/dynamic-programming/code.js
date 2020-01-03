// const map = new Map()
// var climbStairs = function(n) {
//   if (n < 0) return 0
//   if (n === 1) return 1
//   if (n === 2) return 2

//   if (map.has(n)) {
//     return map.get(n)
//   }

//   const value = climbStairs(n - 1) + climbStairs(n - 2)
//   map.set(n, value)
//   return value

// };

function climbStairs(n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2
  let a = 1
  let b = 2
  let temp

  for (let i = 3; i <= n; i++) {
    temp = a + b
    a = b
    b= temp
  }

  return temp
}

console.log(climbStairs(4))