<template>
  <el-container class="me">
    <el-header style="height: 185px">
      <gl-my-header :header="false"></gl-my-header>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="5">
          <me-menu/>
          <div class="download-app">
            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="entertainment">
            <p>美团APP手机版</p>
            <span class="red">1元起</span>
            <span class="gary">吃喝玩乐</span>
          </div>
        </el-col>
        <el-col :span="19">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script type="text/ecmascript-6">
import meMenu from '@/components/me/meMenu'
export default {
  name: 'me',
  data () {
    return {
    }
  },
  components: {meMenu}
}
</script>

<style scoped lang="stylus">
.me
  .el-col
    .download-app
      width: 238px;
      height: 165px;
      margin-top: 10px;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      text-align center
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
