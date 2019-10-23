<template>
  <div class="menu">
    <div class="nav">
      <p>全部分类</p>
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <i :class="item.type"></i>
          <span><router-link to="/changecity">{{item.name}}</router-link></span>
          <i class="arrow"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { menu } from '@/assets/data/menu'
export default {
  name: '',
  data () {
    return {
      menu: menu
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.menu
  width: 230px;
  height: 475px;
  box-sizing: border-box;
  margin-top: -50px;
  margin-left: 20px;
  position: relative;
  background: #fff
  border 1px solid #DCDFE6
  .nav
    p
      height: 50px;
      padding-top: 15px;
      box-sizing: border-box;
      color: #222222;
      font-size: 16px;
      font-weight: 700;
      margin-left: 15px;
    li
      box-sizing: border-box;
      padding: 2px 12px;
      height: 26px;
      &:hover
        background: rgba(255,150,0,0.08);
        a
          font-weight 700
          color: #222222
      a
        font-size: 13px;
        line-height: 20px;
        height: 20px;
        color: #646464;
        cursor: pointer;
</style>
