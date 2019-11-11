<template>
  <div class="menu">
    <router-link tag="p" to="/me/" style="cursor: pointer;">我的美团</router-link>
    <div class="nav" v-for="(item, index) in menu" :key="index">
      <router-link tag="p" :to="`/me/${item.type}`" class="title">{{item.name}}</router-link>
      <ul>
        <li class="child" v-for="(child, index) in item.child" :key="index">
          <span>{{child.title}}</span>
          <i></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { meMenu } from '@/assets/data/me'
export default {
  name: '',
  data () {
    return {
      menu: meMenu
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.menu
  background #FFFFFF
  border 1px solid #E5E5E5
  border-radius 4px
  width 240px
  padding 30px 20px 20px 30px
  box-sizing border-box
  p
  font-size 16px
  color #222222
  .nav
    margin-top 30px
    .title
      cursor pointer
      margin 12px 0
    ul
      margin 0
      padding 0
      li
        margin 15px 0
        span
          font-size 14px
          color #666
          cursor pointer
        i
          width 4px
          height 4px
          border 1px solid #666
          border-top 1px solid #fff
          border-left 1px solid #fff
          transform rotate(-45deg)
          float right
          vertical-align middle
          margin 4px auto 0
</style>
