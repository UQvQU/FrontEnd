<template>
  <div>
    <el-row>
      <el-col :span="14"><carousel/></el-col>
      <el-col :span="4">
        <div class="entertainment">
          <img @click="toEntertainment" src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="entertainment">
        </div>
      </el-col>
      <el-col :span="6">
        <div class="user">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="avatar">
          <p>Hi! 你好</p>
          <router-link to="login">
            <el-button>注册</el-button>
          </router-link>
          <router-link to="register">
            <el-button>立即登录</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="hotel">
          <img @click="toEntertainment" src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="entertainment">
        </div>
      </el-col>
      <el-col :span="7">
        <div class="study">
          <img @click="toEntertainment" src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="entertainment">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="merchantsSettle">
          <img @click="toEntertainment" src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="entertainment">
        </div>
      </el-col>
      <el-col :span="6">
        <div class="download-app">
          <img @click="toEntertainment" src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="entertainment">
          <p>美团APP手机版</p>
          <span class="red">1元起</span>
          <span class="gary">吃喝玩乐</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import carousel from '@/components/main/carousel'
export default {
  name: '',
  data () {
    return {
      entertainment: require('../../assets/img/wr2.jpg')
    }
  },
  methods: {
    toEntertainment () {
      this.$router.push({path: '/changecity'})
    }
  },
  components: {
    carousel
  }
}
</script>

<style scoped lang="stylus">
.entertainment
  margin 10px 10px 10px 0
  width 150px
  height 240px
  img
    cursor pointer
    width 100%
.user
  margin 10px 0 10px 0
  box-sizing border-box
  height 240px
  background #fff
  // displayflex
  // flex-direction column
  // align-items center
  padding-top 30px
  text-align center
  border 1px solid #e5e5e5
  p
    font-size 16px
    color #222
    // text-align center
    font-weight 500
    // white-space nowrap
    // width 6em
    // overflow hidden
    // text-overflow ellipsis
    margin 12px auto
  .el-button
    width 118px
    // text-align center
    margin-bottom 15px
    background #fff
    border 1px solid #e5e5e5
    border-radius 40px
    font-size 14px
    color #333
    transition background-color 0.5s
    // display block
    // line-height 38px
    &hover
      background-color #eee
  img
    width 47px
    height 47px
    border-radius 50%
    border 4px solid #E5E5E5
        // p>button {
        //   width 120px
        //   margin-bottom 15px
        // }
.hotel,.study
  height 165px
  // width 135px
  margin-right 10px
  margin-left 10px
  cursor pointer
.study
  margin-left 0
.merchantsSettle
  width 150px
  height 165px
  cursor pointer
img
  width 100%
  height 100%
.download-app
  background #fff
  height 165px
  text-align center
  border 1px solid #e5e5e5
  img
    width 95px
    height 95px
    margin-top 10px
  p
    font-size 16px
    color #222
    font-weight 500
    margin 10px 0 5px
  span
    font-size 12px
    font-weight 500
    color #EC5330
    margin-right 5px
  .gary
    color #3f3f3f
    font-style normal
</style>
