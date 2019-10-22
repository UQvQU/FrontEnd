<template>
  <div class="user">
    <template v-if="user">
      欢迎您，<span class="username">{{user}}</span>
      [<router-link to="/exit">退出</router-link>]
    </template>
    <template v-else>
      <router-link to="login">立即登录</router-link>
      <router-link to="register">注册</router-link>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      user: ''
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
</style>
