var isValid = function(s) {
  if (!s || s.length < 1) {
    return true
  }
  var n = s.length
  const stack = []

  for (var i = 0; i < n; i++) {
    var c = s[i]
    if (c == '(' || c == '[' || c == '{') {
      // console.log(c == '[')
      stack.push(c)
    } else {
      if (stack.length < 1) {
        return false
      }
      let right = stack.pop()
      // console.log(right, right == '[', c == ']')
      if (right == '(' && c == ')') {
        // console.log('(')
        continue
      } else if (right == '[' && c == ']') {
        // console.log('[')
        continue
      } else if (right == '{' && c == '}') {
        // console.log('{')
        continue
      } else {
        // console.log('false') 
        return false
      }
    }
  }
  return stack.length > 0 ? false : true
}

console.log(isValid('[][]{(())()}'))