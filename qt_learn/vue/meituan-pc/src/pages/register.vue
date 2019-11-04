<template>
  <div class="register">
    <div class="header">
      <div class="wrapper">
        <router-link to="/">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="logo">
        </router-link>
        <div class="login">
          <span>已有美团账号？</span>
          <!-- <router-link to="login"><el-button>登录</el-button></router-link> -->
          <el-button @click.native="login">登录</el-button>
        </div>
      </div>
    </div>
    <div class="content">
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="手机号">
          <el-input type="text" v-model="phoneNumber"></el-input>
          <span>注册成功后，全美团通用</span>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="checkPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">同意一下协议并注册</el-button>
        </el-form-item>
      </el-form>
      <div class="term">
        <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        <a class="f1" href="https://rules-center.meituan.com/rules-detail/2" target="_blank">《美团网隐私协议》</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'register',
  data () {
    return {
      phoneNumber: '',
      password: '',
      checkPassword: ''
    }
  },
  methods: {
    register () {
      let self = this
      if (this.phoneNumber.trim() === '' || this.password.trim() === '') {
        this.$message({
          message: '手机号或密码不能为空',
          type: 'warning'
        })
        return
      }
      if (this.password.trim() !== this.checkPassword.trim()) {
        this.$message({
          message: '前后密码不一致',
          type: 'warning'
        })
        return
      }
      console.log('register')
      this.$http({
        url: 'http://localhost:3000/users/register',
        method: 'post',
        data: {
          phoneNumber: this.phoneNumber.trim(),
          userPassword: this.password.trim()
        }
      }).then(res => {
        console.log('res:', res)
        if (res.data.code === '800000') {
          console.log('login', this === self)
          self.$router.push({path: '/login'})
        } else {
          this.$message({
            message: res.data.message,
            type: 'warning'
          })
        }
      }).catch(error => {
        console.log('error', error)
      })
    },
    login () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style scoped lang="stylus">
.register
  background-color #fff
  .header
    border-bottom 2px solid #D8D8D8
    min-width 980px
    color #666
    .wrapper
      margin 0 auto
      padding 10px 0
      width 980px
      img
        // width 128px
        height 36px
      .login
        float right
        line-height 36px
        span
          margin-right 10px
          vertical-align sub
        .el-button
          width 50px
          height 25px
          line-height 25px
          padding 0
          // vertical-align middle
          font-size 12px
          // border-color rgba(191,105,0,.15)
          color #222
          background-image linear-gradient(135deg,#FFD000 0,#FFBD00 100%)
          border-width 0
          // box-shadow 0 2px 1px rgba(191,105,0,.15)
          background-size 100%
  .content
    margin 0 auto 30px
    padding-top 30px
    width 980px
    min-height 300px
    .el-input
      width 248px
      height 24px
      line-height 24px
    span
      font-size 12px
      color #999
    .el-button
      background-image linear-gradient(135deg,#FFD000 0,#FFBD00 100%)
      border-width 0
      box-shadow 0 2px 1px rgba(191,105,0,.15)
      background-size 100%
      color #666
      line-height 10px
      font-size 14px
      >>> span
        // line-height 50px
        font-size 14px
        font-weight 800 !important
    .term
      padding 3px 10px 3px 100px
      box-sizing border-box
      margin 0 auto 8px
      .f1
        color #FE8C00
        font-size 13px
</style>
