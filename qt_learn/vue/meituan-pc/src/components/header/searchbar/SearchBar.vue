<template>
  <el-row class="searchbar">
    <el-col :span="3" class="logo">
      <router-link to="/">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
      </router-link>
    </el-col>
    <el-col :span="21" class="searchwrapper">
      <div class="search">
        <el-input placeholder="搜索商家或地点"/>
        <!-- <button>i.</button> -->
        <el-button><i class="el-icon-search"></i></el-button>
      </div>
      <ul class="searchList">
        <li v-for="(item, index) in scenery" :key="index">
          <router-link :to="{name: 'Scenery', params:{name: item.name}}">{{item.name}}</router-link>
        </li>
      </ul>
      <ul class="recommend" v-show="header">
        <li v-for="(item, index) in recommend" :key="index">
          <router-link :to="{name: item.url}">{{item.name}}</router-link>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'SearchBar',
  props: {
    header: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      scenery: [
        {name: '古北水镇'},
        {name: '古北水镇'},
        {name: '古北水镇'},
        {name: '中国国家博物馆'},
        {name: '古北水镇'},
        {name: '古北水镇'},
        {name: '古北水镇'},
        {name: '古北水镇'}
      ],
      recommend: [
        {url: 'Movie', name: '猫眼电影'},
        {url: 'Movie', name: '猫眼电影'},
        {url: 'Movie', name: '猫眼电影'},
        {url: 'Movie', name: '民宿 / 公寓'},
        {url: 'Movie', name: '猫眼电影'},
        {url: 'Movie', name: '猫眼电影'}
      ]
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.searchbar
  margin 0 auto
  // height 160px
  // display flex
  padding 15px 45px
  background #fff
  box-sizing border-box
  .logo
    padding-top 15px
    img
      width 126px
      height 46px
  .searchwrapper
    box-sizing border-box
    padding-left 112px
    // border 1px solid #f40
    .search
      margin 15px 0 0 60px
      border-radius 4px
      width 552px
      display flex
      .el-input
        width 462px
        // border 1px solid #f40
        >>>input.el-input__inner
          border-right none
          border-top-right-radius 0
          border-bottom-right-radius 0
      .el-button
        width 88px
        border none
        background #FFC300
        font-size 16px
        border-top-left-radius 0
        border-bottom-left-radius 0
        i
          font-weight 900
        &:hover
          color #000
    .searchList
      display flex
      padding 10px 10px 0 70px
      box-sizing border-box
      padding-bottom 16px
      li
        margin-right 10px
        a:hover
          color #fe8c00
    .recommend
      display flex
      // margin-top 12px
      padding-top 20px
      box-sizing border-box
      // border 1px solid #000
      li
        margin 0 20px
        cursor pointer
        // position relative
        a
          font-weight 700
          font-size 16px
          color #222
          &:hover
            color #fe8c00
        &:nth-child(1)
          a:hover
            color #fbc700
        &:nth-child(2)
          a:hover
            color #ed1e24
        &:nth-child(3),&:nth-child(6)
          a:hover
            color #f04d4e
        &:nth-child(4)
          a:hover
            color #fdc411
</style>
