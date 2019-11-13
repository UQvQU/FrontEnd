<template>
  <div class="recommend">
    <div class="tab">
      <ul>
        <p>猜你喜欢</p>
        <li>为你甄选最合适的</li>
      </ul>
    </div>
    <div class="list">
      <card/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import card from '@/components/main/card'
export default {
  name: '',
  data () {
    return {}
  },
  components: {card}
}
</script>

<style scoped lang="stylus">
.recommend
  width: 1190px;
  margin-top: 40px;
  .tab
    ul
      height: 44px;
      line-height: 44px;
      background-color: rgb(190, 164, 116);
      background: linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%) rgb(88, 174, 221);
      display: flex;
      font-size: 14px;
      color: #fff;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      p
        font-size: 18px;
        margin-left: 13px;
        margin-right: 10px;
        padding: 0 5px;
      li
        padding: 0 5px;
        position: relative;
        cursor: pointer;
        &:after
          position: absolute;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 7px solid #fff;
          content: " ";
          width: 2px;
          height: 0;
          top: 37px;
          left: 0;
          right: 0;
          margin: auto;
  .list
    // list-style none
    width 100%
    padding 11px 10px 10px
    background-color #fff
    border-bottom-left-radius 4px
    border-bottom-right-radius 4px
    box-sizing border-box
    border-left 1px solid #e5e5e5
    border-right 1px solid #e5e5e5
    border-bottom 1px solid #e5e5e5
</style>
