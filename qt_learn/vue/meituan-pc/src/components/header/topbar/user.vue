<template>
  <div class="user">
    <template v-if="user">
      <span class="username">{{user.nickname}}</span>
      <span @click="exit" style="cursor: pointer">退出</span>
    </template>
    <template v-else>
      <router-link to="login" class="username">立即登录</router-link>
      <router-link to="register">注册</router-link>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
  name: '',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      user: state => state.loginState.user
    })
  },
  methods: {
    exit () {
      this.$store.dispatch('setUser', null)
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped lang="stylus">
.username
  margin-right 10px
  color #FE8C00
  cursor pointer
</style>
