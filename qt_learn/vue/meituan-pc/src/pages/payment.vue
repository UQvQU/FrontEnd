<template>
  <el-container>
    <el-header style="height: 185px">
      <gl-my-header :header="false"></gl-my-header>
    </el-header>
    <el-main>
      <countdown/>
      <div class="order clear-fix">
        <span class="left">
          <div class="order-name">项目：{{data.title}}</div>
        </span>
        <span class="right">
          <div class="amount">应付金额￥
            <span class="amount-price">{{data.totalPrice}}</span>
          </div>
        </span>
      </div>
      <div class="payment-container">
        <div class="payment-submit-area clear-fix">
          <div class="amount">支付
            <span class="amount-price">{{data.totalPrice}}</span>
          </div>
          <div class="payment-submit">
            <router-link to="/me/order">支付</router-link>
          </div>
          <div class="payment-back">
            <router-link to="/buy">返回修改订单</router-link>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script type="text/ecmascript-6">
import countdown from '@/components/pay/countdown'
export default {
  name: 'Payment',
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
      console.log('payment:', this.data)
    }
  },
  components: {countdown}
}
</script>

<style scoped lang="stylus">
.order
    line-height: 24px;
    padding: 20px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    margin-bottom: 10px;
    box-sizing: content-box;
    .left
      width: 75%;
      float left
      .order-name
        font-size: 20px;
        color: #222;
        width: 600px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 15px;
    .right
      width: 25%;
      float left
      text-align: right;
      .amount
        text-align: right;
        font-size: 14px;
        color: #f60;
        .amount-price
          font-size: 30px;
          font-family: arial,sans-serif;
.clear-fix:after, .clear-fix:before
  display: table;
  content: " ";
.clear-fix:after
  clear: both;
.payment-container
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 30px 20px 30px;
  box-sizing: border-box
  .payment-submit-area
    .amount
      // height 40px
      line-height 40px
      // text-align: right;
      font-size: 14px;
      color: #f60;
      float left
      .amount-price
        font-size: 30px;
        font-family: arial,sans-serif;
    .payment-back, .payment-submit
      float: right;
      height 40px
      line-height: 40px;
    .payment-submit
      a
        font-size: 14px;
        padding: 10px 36px;
        border: none;
        background-color: #f90;
        border-radius: 100px;
        background-image: linear-gradient(180deg,#ffa114,#f59300);
        color #fff
        cursor pointer
        letter-spacing: 2px
    .payment-back
      margin-right: 20px;
      a
        font-size: 12px;
        color: #666;
        cursor pointer

</style>
