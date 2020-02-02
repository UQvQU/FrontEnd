// 时间复杂度O(n)
// https://juejin.im/post/5ddfa3def265da05ef59fe6e
function longestValidParentheses(s) {
  var max = 0
  if (s.length == 0 || s.length == 1) return max
  var stack = [-1]
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      stack.push(i)
    } else if (s[i] == ')') {
      stack.pop()
      if (stack.length < 1) {
        stack.push(i)
      } else {
        // 当前下标减去栈顶
        max = Math.max(max, i - stack[stack.length - 1])
      }
    }
  }
  return max
}

console.log(longestValidParentheses('()(()()'))