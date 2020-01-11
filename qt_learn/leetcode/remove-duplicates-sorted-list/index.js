function removeDuplicates(arr) {
  let cur = pre = 0
  // console.log(arr[pre])
  while(arr[pre] !== undefined) {
    pre++
    if (arr[pre] !== arr[cur]) {
      if ((pre - cur) > 1) {
        arr.splice(cur + 1, pre - cur - 1)
        pre = cur + 1
      }
      cur = pre
    } else {
      if (arr[pre + 1] === undefined) {
        arr.splice(cur + 1)
      }
    }
  }
  return arr.length
}

console.log(removeDuplicates([1, 1, 2, 2]))