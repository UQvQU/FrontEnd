<template>
  <div class="login">
    <div class="header">
      <router-link to="/">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="logo">
      </router-link>
    </div>
    <div class="wrapper">
      <div class="left">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
      </div>
      <div class="right">
        <form action="/">
          <p>账号登录</p>
          <el-input type="text" v-model="phoneNumber"></el-input>
          <el-input type="password" v-model="password"></el-input>
          <span class="password">忘记密码？</span>
          <input class="submit" type="submit" value="登录"/>
          <p>还没有账号？<router-link to="/register"><span>免费注册</span></router-link></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      phoneNumber: '',
      password: ''
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.login
  background-color #fff
  .header
    width 980px
    padding 40px 0 30px
    margin 0 auto
    box-sizing border-box
    img
      width 130px
      height 47px
  .wrapper
    margin 0 auto 70px
    width 980px
    display flex
    .left
      margin 0 115px 0 0
      img
        width 480px
        height 370px
    .right
      width 270px
      input
        display block
        width 100%
      span
        color #FE8C00
        cursor pointer
      .password
        width 100%
        display inline-block
        text-align right
        font-size 12px
        margin-bottom 8px
      .el-input
        margin 8px 0
      .submit
        color #222
        background-image linear-gradient(135deg,#FFD000 0,#FFBD00 100%)
        border-width 0
        box-shadow 0 2px 1px rgba(191,105,0,.15)
        background-size 100%
        padding 7px 20px 6px
        font-size 14px
        font-weight 700
        box-sizing border-box
        line-height 20px
        border-radius 2px
        margin 8px 0
        cursor pointer
</style>
