<template>
  <el-container class="vouchers">
    <el-header style="height: 185px">
      <gl-my-header :header="false"></gl-my-header>
    </el-header>
    <!-- <router-view></router-view> -->
    <el-main>
      <div class="detail">
        <div class="left">
          <div class="gallery">
            <img :src="data.imgUrl" alt="美团">
          </div>
        </div>
        <div class="right">
          <h1>{{data.title}}</h1>
          <h2>{{current.desc}}</h2>
          <div class="info">
            <dl class="row">
              <dt class="v-bottom">团购价</dt>
              <dd>
                <em class="icon">￥</em>
                <span class="cur-price">{{current.curPrice}}</span>
                <del class="ori-price">最高门店价￥{{current.oriPrice}}</del>
                <span class="discount">{{current.discount}}折</span>
                <span class="sold-num">已售{{current.soldNum}}</span>
              </dd>
            </dl>
            <dl class="row">
              <dt class="v-middle">套餐</dt>
              <dd>
                <ul class="tag-wrapper">
                  <router-link v-for="(item, i) in details" :key="i" :to="`/vouchers/${id}/${i}`" tag="li" :class="{'active': index == i}">
                    <span>{{item.curPrice}}.0代{{item.oriPrice}}.0元券</span>
                  </router-link>
                </ul>
              </dd>
            </dl>
            <dl class="row">
              <dt class="v-middle">数量</dt>
              <dd>
                <div class="input-number">
                  <button class="minus" @click.stop="minus">-</button>
                  <input type="text" value="1" class="input" ref="num">
                  <button class="plus" @click.stop="plus">+</button>
                </div>
              </dd>
            </dl>
            <dl class="row">
              <dt>有效期</dt>
              <dd>{{current.termOfValidity}}</dd>
            </dl>
            <div class="action">
              <button class="buy" @click="toBuy">立即购买</button>
              <!-- <router-link :to="{path:'/buy',query:{num: value}}" class="buy" tag="button">立即抢购</router-link> -->
            </div>
            <dl class="row">
              <dt>服务承诺</dt>
              <dd>
                <span v-for="(item, index) in current.service" :key="index">
                  {{item}}
                  <b v-show="current.service.length === index + 1 ? false : true"> | </b>
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script type="text/ecmascript-6">
import { recommend } from '@/assets/data/main'
export default {
  name: 'VouchersDetail',
  data () {
    return {
      details: {},
      data: {},
      current: {},
      index: this.$route.params.index,
      id: this.$route.params.id
    }
  },
  mounted: function () {
    // console.log(this.$route.params.id)
    let data = recommend.filter((item) => item.itemId === this.$route.params.id)
    this.data = data[0]
    this.details = data[0].vouchers
    // console.log('index', this.index)
    this.current = data[0].vouchers[this.index]
    // console.log('current', this.current)
    // console.log('details', this.details)
  },
  methods: {
    minus () {
      let num = parseInt(this.$refs.num.value)
      if (num > 1) {
        this.$refs.num.value = --num
      }
      console.log(num, this.$refs.num.value)
    },
    plus () {
      let num = parseInt(this.$refs.num.value)
      this.$refs.num.value = ++num
      console.log(this.$refs.num.value)
    },
    toBuy () {
      console.log('voucher:', this.voucher)
      this.$router.push({path: '/buy', name: 'Buy', params: {data: this.voucher}})
    }
  },
  computed: {
    voucher () {
      return {
        id: this.data.itemId,
        title: this.data.title,
        index: this.index,
        unitPrice: parseInt(this.current.curPrice),
        num: parseInt(this.$refs.num.value)
      }
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.detail
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  margin-bottom: 17px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  display flex
  box-shadow: 0 5px 14px 0 rgba(0,0,0,.1);
  .left
    width 428px
    .gallery
      width 100%
      height 320px
      img
        width 100%
        height 100%
  .right
    flex 1
    margin-left 25px
    h1
      margin: 0 0 10px;
      font-size: 26px;
      line-height: 37px;
    h2
      margin: 0 0 10px;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      color: #222;
    .info
      padding-top: 17px;
      border-top: 1px solid #e5e5e5;
      box-sizing border-box
      .row
        padding-bottom: 22px;
        overflow: hidden;
        margin: 0;
        &:last-child
          padding-bottom 0px
        dt
          float: left;
          width: 95px;
          font-size: 14px;
          color: #222;
          &.v-bottom
            padding-top: 28px;
            line-height: 20px;
          &.v-middle
            line-height: 36px;
        dd
          // position: relative;
          margin-left: 95px;
          font-size: 14px;
          color: #666;
          em,
          .cur-price
            font-size: 16px;
            font-style: normal;
            color: #F90;
          span.cur-price
            font-size: 38px;
            line-height: 53px;
          .ori-price
            margin-left: 10px;
            font-size: 12px;
            color: #999;
          .discount
            position: relative;
            display: inline-block;
            margin-left: 5px;
            color: #FA952F;
            font-size: 12px;
            line-height: 14px;
            background-color: #FEF4EA;
          .sold-num
            float: right;
            padding-top: 26px;
            font-size: 12px;
            color: #666;
          ul.tag-wrapper
            // position: relative;
            overflow: hidden;
            max-height: 104px;
            display flex
            li
              margin-bottom: 16px;
              span
                box-sizing: border-box;
                display: block;
                padding: 0 10px;
                margin-right: 16px;
                height: 36px;
                line-height: 36px;
                color: #666;
                border: 1px solid #e5e5e5;
                border-radius: 2px;
                text-align: center;
                cursor: pointer;
              &.active span
                color: #fff;
                background-color: #31BBAC;
                border-color: #31BBAC;
          .input-number
            display: inline-block;
            border: 1px solid #E5E5E5;
            border-radius: 2px;
            button
              position: relative;
              box-sizing: content-box;
              font-size: 0;
              outline: 0;
              background-color: #fff;
              cursor: pointer;
              vertical-align: top;
              padding: 0;
              width: 34px;
              height: 34px;
              border: none;
              &:before,
              &.plus:after
                content: "";
                display: inline-block;
                position: absolute;
                background-color: #E2E2E2;
                -webkit-transform: scale(0.5);
                transform: scale(0.5);
                -webkit-transform-origin: left top;
                transform-origin: left top;
              &:before
                top: 16px;
                left: 10px;
                width: 28px;
                height: 3px;
                transition: background .6s ease;
              &.plus:after
                top: 10px;
                left: 16px;
                width: 3px;
                height: 28px;
            input
              color: #222;
              text-align: center;
              font-size: 14px;
              border: 1px solid #E5E5E5;
              border-top: none;
              border-bottom: none;
              vertical-align: top;
              padding: 0;
              width: 34px;
              height: 34px;
              // border: none;
              outline: 0;
      .action
        padding-left: 95px;
        margin-bottom: 27px;
        button
          background-color: #F90;
          width: 150px;
          height: 50px;
          font-size: 20px;
          line-height: 50px;
          padding: 0;
          border-radius: 100px;
          border: none;
          outline: 0;
          text-align: center;
          color: #fff;
          cursor: pointer;
          transition: background .6s ease;

</style>
