<template>
  <div class="card">
    <el-card :body-style="{ padding: '0px' }" :class="{'mar': isUserInfo}" v-for="(item, index) in recommend" :key="index">
      <div class="image">
        <img :src="item.imgUrl" alt="meituan">
      </div>
      <div class="text">
        <div class="title">{{item.title}}</div>
        <div class="score-line">
          <div class="score">{{item.score}}</div>
          <div class="comment">{{item.commentNum}}个评价</div>
        </div>
        <div class="desc-line">{{item.areaName}}</div>
        <div class="price-line">
          <span class="symbol">￥</span>
          <span class="numfont">{{item.lowPrice}}</span>
          <span class="desc">起</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
import { recommend } from '@/assets/data/main'
export default {
  name: '',
  props: {
    isUserInfo: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      recommend: recommend
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.card
  display flex
  flex-wrap wrap
  .el-card
    width 232px
    padding 10px
    box-sizing border-box
    border none
    border-radius 4px
    -webkit-transition background-color 500ms
    -ms-transition background-color 500ms
    transition background-color 500ms
    box-shadow none
    cursor pointer
    .el-card__body
      .image
        max-width 100%
        width 100%
        // height 208px
        margin-bottom 11px
        border-radius 4px
        overflow hidden
        img
          width 100%
          font-size 0
          // height 100%
      .text
        .title
          font-size: 16px;
          line-height: 22px;
          width: 100%;
          height: 22px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        .score-line
          height: 24px;
          .score,
          .comment
            display inline-block
          .comment
            font-size: 12px;
            color: #999;
            height: 24px;
            line-height: 24px;
            margin-left: 10px;
        .desc-line
          height: 18px;
          font-size: 12px;
          color: #999;
          line-height: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: 4px;
        .price-line
          height: 28px;
          color: #FF6600;
          .symbol
            font-size: 14px;
            font-weight: 700;
          .numfont
            line-height 28px
            font-size: 22px;
            font-family: "numbers" !important;
            letter-spacing: -0.5px
          .desc
            font-size: 12px;
            margin-left: 4px;
            font-weight: 700;
    &:hover
      background #F4F4F4
  .mar
    margin 10px 0
</style>
