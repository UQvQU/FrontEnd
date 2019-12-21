const { createStore } = require('redux')
// 数据创建 修改
let a = 123
a = 456
// 返回值
// count 相当于reducer
function count(state, action) {
  console.log('state', state)
  switch (action.type) {
    case 'ADD':
      return ++state;
    case 'DELETE':
      return --state;
    default:
      return 0;
  }
}

const store = createStore(count)
console.log('..................')
// 订阅 数据改变
store.subscribe(() => {
  console.log('data change')
})

store.dispatch({
  type: 'ADD'
})
console.log(store.getState())
store.dispatch({
  type: 'DELETE'
})

console.log(store.getState())