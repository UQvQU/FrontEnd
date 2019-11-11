<template>
  <div class="navbar">
    <ul class="nav">
      <li class="list">
        <router-link to="/me">我的美团</router-link>
        <dl>
          <dd><router-link to="/me/order">我的订单</router-link></dd>
          <dd><router-link to="/me/order">我的收藏</router-link></dd>
          <dd><router-link to="/me/order">抵用券</router-link></dd>
          <dd><router-link to="/me/order">账户设置</router-link></dd>
        </dl>
      </li>
      <li class="list mobile"><router-link to="/mobile">手机App</router-link></li>
      <li class="list">
        <p>商家中心</p>
        <dl class="merchant">
          <dd><router-link to="/order">登录商家中心</router-link></dd>
          <dd><router-link to="/order">美团智能收银</router-link></dd>
          <dd><router-link to="/order">我想合作</router-link></dd>
          <dd><router-link to="/order">手机免费开店</router-link></dd>
          <dd><router-link to="/order">餐饮代理商招募</router-link></dd>
          <dd><router-link to="/order">商家申请开票</router-link></dd>
          <dd><router-link to="/order">免费合作美团排队</router-link></dd>
        </dl>
      </li>
      <li class="list">
        <p>美团规则</p>
        <dl>
          <dd><router-link to="/order">规则中心</router-link></dd>
          <dd><router-link to="/order">规则目录</router-link></dd>
          <dd><router-link to="/order">规则评议院</router-link></dd>
        </dl>
      </li>
      <li class="list">
        <p>网站导航</p>
        <div class="website">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd v-for="(hotel, index) in hotels" :key="index"><router-link to="/hotel">{{hotel.title}}</router-link></dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd v-for="(food, index) in foods" :key="index"><router-link to="/food" >{{food.title}}</router-link></dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd v-for="(movie, index) in movies" :key="index"><router-link to="/movie" >{{movie.title}}</router-link></dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="#">
                <img src="@/assets/logo.png" alt="">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="@/assets/logo.png" alt="">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="@/assets/logo.png" alt="">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="@/assets/logo.png" alt="">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="@/assets/logo.png" alt="">
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      hotels: [
        {
          title: '青年旅社'
        },
        {
          title: '青年旅社'
        },
        {
          title: '青年旅社'
        },
        {
          title: '青年旅社'
        }
      ],
      foods: [
        {
          title: '特色小吃'
        },
        {
          title: '特色小吃'
        },
        {
          title: '特色小吃'
        },
        {
          title: '特色小吃'
        }
      ],
      movies: [
        {
          title: '热映电影'
        },
        {
          title: '热映电影'
        },
        {
          title: '热映电影'
        },
        {
          title: '热映电影'
        }
      ]
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.navbar
  float right
  margin 0
  padding 0
  z-index 1
  // border 1px solid #f40
  .nav
    list-style none
    // float right
    height 40px
    li
      float left
      width 78px
      height 40px
      line-height 40px
      box-sizing content-box
      text-align center
      cursor pointer
      position relative
      z-index 10
      a,p
        color #999
        &:hover
          color #fe8c00
      &.list:hover
        background #fff
        // border 1px solid #E5E5E5
        // border-top none
        // border-bottom none
        box-shadow 0 3px 5px 0 rgba(0,0,0,0.1)
        dl
          display block
          // border 1px solid #E5E5E5
          // border-top none
        .website
          display flex
      &.list.mobile:hover
        border none
        background none
        box-shadow none
      dl
        position absolute
        top 39px
        left 0
        width 100%
        display none
        text-align center
        // z-index 100
        box-shadow 0 3px 5px 0 rgba(0,0,0,0.1)
        // border-bottom-left-radius 10px
        // border-bottom-right-radius 10px
        // box-sizing content-box
        dd
          width 100%
          background #fff
          // z-index 100
          line-height 35px
        // &focus
        //   display block
        &.merchant
          width 140%
          // border-top-right-radius 10px
      .website
        box-sizing border-box
        background #fff
        padding 0 14px 0
        width 1188px
        height 280px
        position absolute
        left -1110px
        z-index 100
        // border 1px solid #f40
        display none
        box-shadow 0 3px 5px 0 rgba(0,0,0,0.1)
        // text-align left
        dl
          position absolute
          top 0
          display block
          box-sizing border-box
          background #fff
          box-shadow none
          // border 1px solid #000
          dt,dd
            width 100%
            display block
            float left
            text-align center
            margin-top 20px
          dt
            margin-bottom 10px
            font-size 14px
            color #000
            clear both
          dd
            height 25px
            line-height 25px
            font-size 12px
            display inline-block
            // text-align center
            // border 1px solid #000
            margin 0
          &.hotel
            width 234px
            left 14px
          &.food
            width 236px
            left 248px
          &.movie
            width 150px
            left  484px
            // dd
            //   width 100%
          &.app
            width 540px
            left 634px
            text-align center
            // border 2px solid #abe
            box-sizing border-box
            padding 0 78px 0
            dd
              width 60px
              height 73px
              line-height 73px
              text-align center
              margin 0 8px
              img
                width 60px
                height 60px
</style>
