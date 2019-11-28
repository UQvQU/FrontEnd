var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 递归
// var preOrder = function (node) {
//   if (node) {
//     // 前序
//     console.log(node.value)
//     preOrder(node.left)
//     preOrder(node.right)
//   }
// }
// preOrder(tree)

// 无递归--栈  深度优先DFS  12435786（先序遍历）
// var preOrderUnRecur = function (node) {
//   if (!node) {
//     throw new Error('Empty Tree')
//   }
//   // 建栈
//   var stack = []
//   stack.push(node)
// 
//   while (stack.length != 0) {
//     node = stack.pop()
//     console.log(node.value)
//     if (node.right) {
//       stack.push(node.right)
//     }
//     if (node.left) {
//       stack.push(node.left)
//     }
//   }
// }
// preOrderUnRecur(tree)

// 无递归--队  广度优先BFS  12345678
function BreadthFirstUnRecur (tree) {
  let queue = []
  queue.push(tree)
  while (queue.length != 0) {
    let node = queue.shift()
    console.log(node.value)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
}
BreadthFirstUnRecur(tree)