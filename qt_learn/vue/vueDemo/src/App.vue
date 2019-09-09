<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <Footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/TodoHeader'
import List from './components/TodoList'
import Footer from './components/TodoFooter'
export default {
  name: '',
  data () {
    return {
      // 从localStorage读取todos
      // 深度监视：todos一旦发生变化就保存到当前的浏览器
      // 将getItem()获取字符串形式的数据转换成数组
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },
  // 监视
  watch: {
    todos: {
      // 深度监视
      deep: true,
      handler: function (value) {
        // 将todos(数组)最新的值(转换成字符串)， 保存到localStorage
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
    }
  },
  components: {
    Header,
    List,
    Footer
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    // 删除所有选择的todo
    deleteCompleteTodos () {
      // 选择出所有非选中的todo
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAllTodos (check) {
      this.todos.forEach(todo => { todo.complete = check })
    }
  }
}
</script>

<style scoped>

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
