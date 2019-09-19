/*
使用localStorage存储数据的工具模块
1. 向外暴露函数  （一个功能）
2. 向外暴露对象  （多个功能）
*/
const TODOS_KEY = 'todos_key'
export default {
  saveTodos (todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY || '[]'))
  }
}
