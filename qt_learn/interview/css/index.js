const year = '2017';
const month = '09';
const day = '21';
// 实现以下效果
const str2 = render('${year}-${month}-${day}')({ year, month, day });
console.log('str2', str2)

function render(text) {
  return  function(dates) {
    for(let i in dates) {
      // text = text.replace(/\$\{[a-z]+\}/,  dates[i])
      text = text.replace('${'+i+'}', dates[i])
      console.log(text)
    }
    return text
  }
}


function render2(str) {
  return function (obj) {
    console.log(obj, str)
    let reg = /\$\{([a-z]+)\}/g;
    str = str.replace(reg, (...rest) => {
      console.log('rest2', rest)
      return obj[rest[1]]
    })
    console.log('str2', str)
    return str
  }
}