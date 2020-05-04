function solution(str) {
	let arr = str.split(':')
  let left = arr[0]
  let right = arr[1]
  let sR = left.match(/[0-9]+/g)
  let sC = left.match(/^[A-Z]+/g)
  let eR = right.match(/[0-9]+/g)
  let eC = right.match(/^[A-Z]+/g)
  let res = {} 
  res.startRow = parseInt(sR)
  res.endRow = parseInt(eR)
  res.startCol = num(sC)
  res.endCol = num(eC)
  return res
}
function num(str) {
  let arr = str+''.split('')
  let len = arr.length
  let res = 0
  for (let i = 0; i < len; i++) {
		res += val(arr[i], len - i)
  }
  return res 
}
function val(s, n) {
  let tem = 1
	for(let i = 1; i < n; i++) {
    tem *= 26
  }
  tem *= s.charCodeAt() - 64
  return tem
}

console.log(solution('A1:BBB20'))