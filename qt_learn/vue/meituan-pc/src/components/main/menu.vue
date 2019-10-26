<template>
  <div class="menu">
    <div class="nav" @mouseleave="nLeave">
      <p>全部分类</p>
      <ul>
        <li v-for="(item, index) in menu" :key="index" @mouseenter="pEnter" @mouseleave="pLeave">
          <i :class="item.type"></i>
          <span><router-link to="/changecity">{{item.name}}</router-link></span>
          <i class="arrow"></i>
        </li>
      </ul>
    </div>
    <div v-if="kind" class="child" @mouseenter="cEnter" @mouseleave="cLeave">
      <template v-for="(item, index) in current.child">
        <h2 :key="index">{{item.title}}</h2>
        <span v-for="c in item.child" :key="c">{{c}}</span>
      </template>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { menu } from '@/assets/data/main'
export default {
  name: '',
  data () {
    return {
      menu: menu,
      kind: '',
      current: ''
    }
  },
  methods: {
    nLeave () {
      this.timer = setTimeout(() => {
        this.kind = ''
      }, 150)
    },
    pEnter (e) {
      this.kind = e.target.children[0].className
      // console.log(this.kind)
      this.current = this.menu.filter(item => item.type === this.kind)[0]
      console.log(this.current)
    },
    pLeave () {
      // this.kind = ''
    },
    cEnter () {
      clearTimeout(this.timer)
    },
    cLeave () {
      this.kind = ''
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.menu
  width: 250px;
  height: 475px;
  box-sizing: border-box;
  margin-top: -50px;
  // margin-left: 20px;
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
      i
        font-family: 'meituan';
        font-size: 14px;
        font-style: normal;
        // opacity: 0.3;
        margin-right: 11px;
        vertical-align: middle;
        &:before
          width: 16px;
          height: 16px;
          // display: inline-block
          // line-height: 16px;
      .food
        &:before
          content: "\e622";
          color: #FF8200;
      .takeout
        &:before
          content: "\e630";
          color: #FFB500;
      .hotel
        &:before
          content: "\e62a";
          color: #9B5E3E;
      .homestay
        &:before
          content: "\e631";
          color: #FFB500;
      .movie
        // transform: scaleX(0.7);
        // // transform:scaleX(1.5);
        // -webkit-transform:scaleX(0.7);
        // -moz-transform:scaleX(0.7);
        &:before
          content: "\e62c";
          color: #FF3D00;
          font-size 11px
      .airport
        &:before
          color: #03A9F4
          content: "\e632";
      .ktv
        &:before
          content: "\e627";
          color: #00BF96;
      .life
        &:before
          content: "\e633";
          color: #00BF96;
      .hair
        &:before
          content: "\e626";
          color: #FF4081;
          font-size 10px
          // transform: scale(0.7);
      .marry
        &:before
          content: "\e629";
          color: #FF4081
      .offspring
        &:before
          content: "\e623";
          color: #FF4081
      .sport
        &:before
          content: "\e62b";
          color: #03A9F4;
      .furniture
        &:before
          content: "\e625";
          color: #00BF96
      .study
        &:before
          content: "\e624";
          color: #00BF96
      .health
        &:before
          content: "\e628";
          color: #03A9F4
      .bar
        &:before
          content: "\e621";
          color: #00BF96
      i.arrow
        width: 4px;
        height: 4px;
        border 1px solid #666
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        transform: rotate(-45deg);
        // display: inline-block;
        float right
        vertical-align: middle;
        // position: absolute;
        // right: 13px;
        // top: 0;
        // bottom: 0;
        margin: 8px auto 0;
  .child
    padding: 0 30px;
    position: absolute;
    left: 250px;
    bottom: 0;
    width: 320px;
    height: 416px;
    background: #fff;
    z-index: 9999;
    h2
      margin-top: 24px;
      height: 22px;
      line-height: 22px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e5e5;
    span
      color: #999;
      font-size: 12px;
      line-height: 15px;
      display: inline-block;
      margin-right: 16px;
      margin-top: 10px;
      cursor: pointer;
      &:hover
        color: #FE8C00;
</style>
