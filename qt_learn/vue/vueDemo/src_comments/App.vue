<template>
 <div >
   <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment = "addComment"></Add>
      <List :comments="comments" :deleteComment="deleteComment"></List>
    </div>
  </div>
 </div>
</template>

<script type="text/ecmascript-6">
import Add from './components/Add'
import List from './components/List'
export default {
  name: '',
  data () {
    return {
      // 数据在哪个组件，更新数据的行为(方法)就应该定义在哪个组件
      comments: [
        {
          name: 'Bob',
          content: 'Vue just soso'
        },
        {
          name: 'Tom',
          content: 'Vue so easy'
        },
        {
          name: 'Jack',
          content: 'Vue !!! oh my god!'
        }
      ]
    }
  },
  methods: {
    // 添加评论
    addComment (comment) {
      this.comments.unshift(comment)
    },
    // 删除指定下的comment
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  },
  components: {
    Add,
    List
  }
}
</script>

<style scoped>
</style>
