<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- <a href="???">{{message.title}}</a> -->
        <router-link :to="`/about/messages/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    // 模拟ajax请求从后台获取数据
    setTimeout(() => {
      this.messages = [
        {
          id: 1,
          title: 'm1'
        },
        {
          id: 2,
          title: 'm2'
        },
        {
          id: 3,
          title: 'm3'
        }
      ]
    }, 100)
  },
  methods: {
    // 编程式导航
    pushShow (id) {
      // 向history栈添加一个记录，点击后退会返回到上一个页面
      this.$router.push(`/about/messages/detail/${id}`)
    },
    replaceShow (id) {
      // 不会向history栈里面添加新的记录，点击返回，会跳转到上上一个页面。上一个记录是不存在的
      this.$router.replace(`/about/messages/detail/${id}`)
    }
  }
}
</script>

<style scoped>
</style>
