<template>
  <div class="myPage">
    <div class="user-info-box">
      <div class="info">
        <div class="avatar">
          <router-link to="/me/settings"><img :src="user.avatar" alt="avatar"></router-link>
        </div>
        <div class="nickname">
          <router-link to="/me/settings">{{user.nickname}}</router-link>
          <p class="money">我的余额: ￥0 · 充卡充值</p>
        </div>
        <router-link to="/me/settings">个人信息设置 ></router-link>
      </div>
      <div class="fn">
        <div class="item" @click="toOrder">
          <i class="icon el-icon-s-order"></i>
          <span>全部订单</span>
        </div>
        <div class="item" @click="toOrder">
          <i class="icon el-icon-s-finance"></i>
          <span>待付款</span>
        </div>
        <div class="item" @click="toOrder">
          <i class="icon el-icon-s-ticket"></i>
          <span>待使用</span>
        </div>
        <div class="item" @click="toOrder">
          <i class="el-icon-s-comment"></i>
          <span>待评论</span>
        </div>
        <div class="item" @click="toOrder">
          <i class="el-icon-money"></i>
          <span>退款/售后</span>
        </div>
      </div>
    </div>
    <div class="recommend-list"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
  name: '',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      user: state => state.loginState.user
    })
  },
  methods: {
    toOrder () {
      this.$router.push('/me/order')
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.user-info-box
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-shadow: 0 5px 14px 0 rgba(0,0,0,0.10);
  border-radius: 4px;
  .info
    width: 100%;
    height: 209px;
    background: #FFD000;
    background-image: linear-gradient(to bottom right,#FFD000,#FFBD00);
    border-radius: 4px 4px 0 0;
    display flex
    align-items center
    padding 0 30px
    box-sizing border-box
    a
      color: #222222;
    .avatar
      width: 110px;
      height: 110px;
      border: 10px solid rgba(248,248,248,0.5);
      border-radius: 100%;
      margin-right 20px
      img
        height: 100%;
        width: 100%;
        border-radius: 100%;
        box-shadow: 0 3px 7px 0 rgba(189,92,0,0.53);
        border: 0px;
    .nickname
      flex 1
      a
        font-weight: 500;
        font-size: 26px;
        margin-bottom: 5px;
      p.money
        font-size: 14px;
        font-weight: 400;
  .fn
    width: 100%;
    height: 110px;
    background: #fff;
    padding-left 60px
    box-sizing border-box
    display flex
    align-items center
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    .item
      // width: 170px;
      flex 1
      i
        background: linear-gradient(to bottom right,#FFA24B,#FD7F3A);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size 48px
        vertical-align middle
        cursor pointer
      span
        margin-left 10px
        font-size: 14px;
        color: #666666;
        cursor pointer
</style>
