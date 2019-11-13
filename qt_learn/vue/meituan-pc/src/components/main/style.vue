<template>
  <div class="style">
    <div class="tab">
      <ul>
        <p>有格调</p>
        <li v-for="(tab, index) in tab" :key="index" @click="listCurrent" :class= "[{active: kind === tab.kind}]" :data-kind=tab.kind>{{tab.title}}</li>
      </ul>
    </div>
    <div class="list">
      <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in current" :key="index">
      <div class="image">
        <img :src="item.img" alt="meituan">
      </div>
      <div class="text">
        <p class="title">{{item.title}}</p>
        <span v-for="(tag, index) in item.tag" :key="index" class="tag">{{tag}}</span>
        <div class="price">
          <span class="symbol">￥</span>
          <span class="numfont">{{item.price}}</span>
          <span class="type">/起</span>
        </div>
      </div>
    </el-card>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { list } from '@/assets/data/main'
export default {
  name: '',
  data () {
    return {
      tab: [
        {
          title: '全部',
          kind: 'all'
        },
        {
          title: '约会聚餐',
          kind: 'food'
        },
        {
          title: '丽人SPA',
          kind: 'spa'
        },
        {
          title: '电影演出',
          kind: 'film'
        },
        {
          title: '品质出游',
          kind: 'sight'
        }
      ],
      kind: 'all',
      list: list
    }
  },
  methods: {
    listCurrent (e) {
      this.kind = e.target.dataset.kind
      // console.log(e.target.dataset.kind)
    }
  },
  computed: {
    current () {
      return this.list[this.kind]
    }
  }
}
</script>

<style scoped lang="stylus">
.style
  width 1190px
  margin-top 40px
  .tab
    ul
      height 44px
      line-height 44px
      background-color rgb(190, 164, 116)
      background-image linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%)
      display flex
      box-sizing border-box
      font-size 14px
      color #fff
      border-top-right-radius 4px
      border-top-left-radius 4px
      p
        font-size 18px
        margin-left 13px
        margin-right 10px
        padding 0 5px
      li
        padding 0 5px
        position relative
        cursor pointer
        &:after
          position absolute
          border-left 5px solid transparent
          border-right 5px solid transparent
          border-bottom 7px solid #fff
          content " "
          width 2px
          height 0
          top 37px
          left 0
          right 0
          margin auto
          display none
        &.active:after
          display block
  .list
    display flex
    list-style none
    flex-wrap wrap
    width 100%
    padding 11px 10px 10px
    background-color #fff
    border-bottom-left-radius 4px
    border-bottom-right-radius 4px
    box-sizing border-box
    border-left 1px solid #e5e5e5
    border-right 1px solid #e5e5e5
    border-bottom 1px solid #e5e5e5
    .el-card
      width 33.3%
      height 314px
      padding 10px
      box-sizing border-box
      border none
      border-radius 4px
      -webkit-transition background-color 500ms
      -ms-transition background-color 500ms
      transition background-color 500ms
      height 314px
      box-shadow none
      cursor pointer
      .el-card__body
        .image
          max-width 100%
          width 100%
          height 208px
          margin-bottom 11px
          border-radius 4px
          overflow hidden
          img
            width 100%
            height 100%
        .text
          p.title
            font-size 16px
            color #222
            height 22px
            line-height 22px
            margin-bottom 8px
            font-weight 500
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          span.tag
            font-size 12px
            color #999
            height 18px
            line-height 18px
            text-align center
            border 1px solid #d8d8d8
            border-radius 2px
            margin-right 10px
            margin-bottom 5px
            padding 0 3px
            box-sizing border-box
          .price
            height 27px
            overflow hidden
            margin-bottom 10px
            color #BE9E4D
            .symbol
              font-size 14px
              font-weight 500
            .numfont
              font-size 22px
              letter-spacing -1.2px
            .type
              font-size 12px
              letter-spacing -0.8px
      &:hover
        background #F4F4F4
</style>
