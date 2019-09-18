<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo="addTodo"/> -->
      <!-- 自定义事件：给TODOHeader绑定addTodo事件监听 -->
      <!-- <Header @addTodo="addTodo"/> -->
      <Header ref="header"/>
      <List :todos="todos" />
      <Footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
      <Footer>
        <!-- 使用slot -->
        <input type="checkbox" v-model="isAllCheck" slot="checkAll">
        <span slot="count">已完成{{completeSize}} / 全部 {{todos.length}} </span>
        <button slot="delete" class="btn btn-danger" @click="deleteCompleteTodos" v-show="completeSize">清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import PubSub from 'pubsub-js'
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
  computed: {
    completeSize () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    isAllCheck: {
      get () {
        return this.completeSize === this.todos.length && this.todos.length > 0
      },
      set (value) { // value checkbox的最新值
        this.selectAllTodos(value)
      }
    }
  },
  mounted () {
    // 执行异步监听
    // 给<Header/>绑定addTodo事件监听
    this.$refs.header.$on('addTodo', this.addTodo)

    // 订阅消息
    PubSub.subscribe('deleteTodo', (msg, index) => {
      console.log('delete')
      this.deleteTodo(index)
    })
  },
  // 使用$on(),注意使用$off清除事件监听
  beforeDestroy () {
    this.$refs.header.$off('addTodo')
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
