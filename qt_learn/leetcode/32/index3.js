// 时间复杂度O(n) 降低空间复杂度
function longestValidParentheses(s) {
  var max = 0
  if (s.length == 0 || s.length == 1) return max
  // 用两个变量代替模拟栈的意义
  var left = right = max = 0
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      left++
    } else {
      right++
    }
    if (left == right) {
      max = Math.max(max, 2*right)
    } else if (right > left) {
      left = right = 0
    }
  }

  left = right = 0
// 再倒着走一遍
  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] == '(') {
      left++
    } else {
      right++
    }
    if (left == right) {
      max = Math.max(max, 2 * left)
    } else if (left > right) {
      left = right = 0
    }
  }
  return max
}
console.log(longestValidParentheses('((())(())'))