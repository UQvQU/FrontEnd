<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script type="text/ecmascript-6">
export default {
  // props:['comment']  仅仅指定了属性名
  // 指定属性名和属性值的类型
  props: {
    comment: Object,
    deleteComment: Function,
    index: Number
  },
  name: '',
  data () {
    return {}
  },
  components: {},
  methods: {
    deleteItem () {
      const {comment} = this
      console.log(this, comment)
      if (window.confirm(`确定删除${comment.name}的评论吗？`)) {
        this.deleteComment(this.index)
      }
    }
  }
}
</script>

<style scoped>
li {
  transition: .5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
