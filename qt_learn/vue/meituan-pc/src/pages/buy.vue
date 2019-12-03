<template>
  <el-container>
    <el-header style="height: 185px">
      <gl-my-header :header="false"></gl-my-header>
    </el-header>
    <el-main>
      <div class="bd">
        <form action="">
          <table>
            <tbody>
              <tr>
                <th class="desc">项目</th>
                <th class="unit-price">单价</th>
                <th class="num">数量</th>
                <th class="total-price">总价</th>
              </tr>
              <tr>
                <td>
                  <router-link class="title" :to="`/vouchers/${data.id}/${data.index}`">{{data.title}}:{{data.title}}代金券</router-link>
                </td>
                <td>￥{{data.unitPrice}}</td>
                <td>
                  <div class="input-number">
                    <button class="minus" @click.stop="minus">-</button>
                    <input type="text" :value="this.data.num" class="input" ref="num">
                    <button class="plus" @click.stop="plus">+</button>
                  </div>
                </td>
                <td>￥{{totalPrice}}</td>
              </tr>
            </tbody>
          </table>
          <div class="row"></div>
          <div class="row price">
            <span class="totalPrice">应付金额：
              <span><i>￥</i>{{totalPrice}}</span>
            </span>
          </div>
          <div class="row mobile-info">
            将发送美团券密码至手机号：{{user.phoneNumber.slice(0,3)}}****{{user.phoneNumber.slice(7)}}
          </div>
          <div class="from-submit">
            <input type="button" class="btn" value="提交订单" @click="toPayment">
          </div>
        </form>
      </div>
    </el-main>
  </el-container>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
  name: 'Buy',
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    this.getParams()
  },
  methods: {
    getParams () {
      // 问题：一旦直接刷新buy.vue则无法获取打他
      // 办法：首次获取后暂存数据到store, 刷新后直接上次暂存的数据
      this.data = this.$route.params.data
    },
    minus () {
      let num = parseInt(this.$refs.num.value)
      if (num > 1) {
        this.$refs.num.value = --num
        this.data.num = this.$refs.num.value
      }
      this.getParams()
      // console.log(num, this.$refs.num.value)
    },
    plus () {
      let num = parseInt(this.$refs.num.value)
      this.$refs.num.value = ++num
      this.data.num = this.$refs.num.value
      this.getParams()
      // console.log(this.$refs.num.value)
    },
    toPayment () {
      let value = JSON.parse(JSON.stringify(this.data))
      value.totalPrice = this.totalPrice
      console.log('value:', value)
      this.$router.push({path: '/payment', name: 'Payment', params: {data: value}})
    }
  },
  computed: {
    ...mapState({
      user: state => state.loginState.user
    }),
    totalPrice () {
      console.log('user:', this.user, 'data:', this.data)
      // console.log(this.data.unitPrice * this.data.num)
      return this.data.unitPrice * this.data.num
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.bd
  width 980px
  margin 10px auto 0
  padding 10px 0 65px
  // border 1px solid #000
  table
    width 100%
    text-align center
    border none
    border-collapse collapse
    border-spacing 0
    tr
      background-color #fefefe
      th
        padding 6px 16px
        font-size 14px
        font-weight 700
        background-color #F7F7F7
        &.desc
          width 500px
          text-align left
        &.unit-price
          width 100px
        &.num
          width 180px
        &.total-price
          text-align right
      td
        padding 12px 16px
        color #666
        font-size 16px
        line-height 36px
        &:first-child
          text-align left
        &:last-child
          color #f76120
          text-align right
        a
          width 532px
          cursor pointer
          // overflow:hidden;/*超出部分隐藏*/
          // text-overflow:ellipsis;/*超出部分显示省略号*/
          white-space:nowrap;/*规定段落中的文本不进行换行 */
        .input-number
          display inline-block
          border 1px solid #E5E5E5
          border-radius 2px
          button
            position relative
            box-sizing content-box
            font-size 0
            outline 0
            background-color #fefefe
            cursor pointer
            vertical-align top
            padding 0
            width 34px
            height 34px
            border none
            &:before,
            &.plus:after
              content ""
              display inline-block
              position absolute
              background-color #E2E2E2
              -webkit-transform scale(0.5)
              transform scale(0.5)
              -webkit-transform-origin left top
              transform-origin left top
            &:before
              top 16px
              left 10px
              width 28px
              height 3px
              transition background .6s ease
            &.plus:after
              top 10px
              left 16px
              width 3px
              height 28px
          input
            color #222
            text-align center
            font-size 14px
            border 1px solid #E5E5E5
            border-top none
            border-bottom none
            vertical-align top
            padding 0
            width 34px
            height 34px
            outline 0
  .row
    background-color #fff
    padding 12px
    border-top 1px solid #E5E5E5
    text-align right
  .totalPrice
    font-size 12px
    font-weight bolder
    color #666
    line-height 30px
    span
      font-size 20px
      color #f76120
    i
      font-style normal
      font-weight 400
  .mobile-info
    text-align left
    font-size 12px
  .from-submit
    text-align right
    background-color #fff
    height 100px
    .btn
      display inline-block
      padding 5px 20px 4px
      font-size 20px
      font-weight 400
      color #fff
      background-image linear-gradient(to bottom,#2ec3b4,#2db3a6)
      border-width 0 0 1px
      border-color #008177
      border-radius 2px
      &:hover
        background-color #2db3a6
        background-image none
</style>
