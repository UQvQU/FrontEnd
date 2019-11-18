<template>
  <div class="details">
    <div class="left">
      <div class="name">
        {{data.title}}
        <span><b></b>食品安全档案</span>
      </div>
      <div class="score">
        <div class="star"></div>
        <p>{{data.score}}分人均￥{{data.avgPrice}}</p>
      </div>
      <div class="address">
        <p>地址：{{data.areaName}}</p>
        <p>电话：0791-85222517</p>
        <p>营业时间：周一至周日 11:00-03:00 2019-02-04至2019-02-05 休息</p>
      </div>
      <ul class="tags">
        <li>
          <img src="https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png" alt="wifi">
          提供WiFi
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="big">
        <div class="imgbox">
          <img :src="data.imgUrl" alt="">
        </div>
      </div>
      <ul>
        <li>
          <div class="imgbox">
            <img :src="data.imgUrl" alt="">
          </div>
        </li>
        <li>
          <div class="imgbox">
            <img :src="data.imgUrl" alt="">
          </div>
        </li>
        <li>
          <div class="imgbox">
            <img :src="data.imgUrl" alt="">
          </div>
        </li>
        <li>
          <div class="imgbox">
            <img :src="data.imgUrl" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: '',
  props: {
    data: {
      type: Object,
      default: function () {
        return {message: 'nothing'}
      }
    }
  },
  data () {
    return {}
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.details
  font-size: 12px;
  color: #666;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 20px 33px;
  border: 1px solid #e5e5e5;
  box-shadow: 0 5px 14px 0 rgba(0,0,0,.1);
  display flex
  .left
    flex 1
    padding-right: 20px;
    .name
      font-size: 26px;
      line-height: 37px;
      span
        float: right;
        color: #00c9b3;
        font-size: 12px;
        cursor: pointer;
      b
        background-image: url(https://s0.meituan.net/bs/file/?f=meis/meishi.web:assets/9180fa934a07d959.png@53635fc);
        width: 15px;
        height: 18px;
        background-size: 100% 100%;
        display: inline-block;
        margin-right: 6px;
        vertical-align: middle;
        margin-top: -3px;
    .score
      font-size: 14px;
      height: 24px;
      margin: 6px 0 17px;
      display flex
      align-items center
      .star
        width: 84px;
        height: 24px;
        position: relative;
      p
        flex 1
        margin-left: 6px;
    .address
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      padding: 16px 0 11px;
      box-sizing border-box
      p
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 10px;
    .tags
      padding-top: 20px;
      li
        float: left;
        margin-right: 16px;
        line-height: 17px;
        img
          margin: auto auto 11px;
          width: 24px;
          height: 24px;
          display block
          border 0
  .right
    width 380px
    // border 1px solid #000
    overflow: hidden;
    cursor: pointer;
    .imgbox
      height 100%
      width 100%
      img
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 4px;
    .big
      height: 214px;
      width: 100%;
    ul
      width: 385px;
      padding-top: 10px;
      li
        float: left;
        width: 92px;
        margin-right: 4px;
        height: 50px;
</style>
