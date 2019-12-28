let a = '457', b = '12345678910'
console.log(isContain(a, b))

// function isContain(a, b) {
//   for(let i in b) {  //遍历索引
//     console.log(b[i])
//     if (a[0] === b[i]) {
//       let temp = true
//       for (let j in a) {
//         console.log(j, i, a[j], b[parseInt(i)+parseInt(j)])
//         if (a[j] === b[parseInt(i)+parseInt(j)]) {
//           console.log('container')
//           continue
//         }
//         temp = false
//         break
//       }
//       return temp
//     } else {
//       continue
//     }
//     return false
//   }
// }

function isContain(a, b) {
  for(let i in b) {  //遍历索引
    console.log(b[i])
    if (a[0] === b[i]) {
      let temp = true
      for (let j in a) {
        console.log(j, i, a[j], b[~~i + ~~j])
        if (a[j] === b[~~i + ~~j]) {
          // console.log('container')
          continue
        }
        temp = false
        break
      }
      return temp
    } else {
      continue
    }
  }
}