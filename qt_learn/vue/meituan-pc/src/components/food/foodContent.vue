<template>
  <el-container class="content">
    <el-row>
      <el-col :span="19">
        <div class="vouchers-box">
          <h3>商家团购及优惠</h3>
          <div class="vouchers">
            <h4>{{data.length}}张代金券</h4>
            <div v-for="(item, index) in data" :key="index">
              <div class="one">
                <div class="price">
                  <span><b>￥</b>{{item.curPrice}}</span>
                  代{{item.oriPrice}}元代金券
                </div>
                <div class="name">
                  <router-link to="/buy" class="buy">立即抢购</router-link>
                  <router-link to="/buy" tag="p">{{item.curPrice}}元代{{item.oriPrice}}元代金券</router-link>
                  已售{{item.soldNum}}
                </div>
              </div>
              <div class="line" v-show="index === data.length-1 ? false : true"></div>
            </div>
          </div>
        </div>
        <div class="recommend"></div>
        <div class="comment"></div>
      </el-col>
      <el-col :span="5">
        <div class="recommend">
          <h4>猜你喜欢</h4>
          <card />
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script type="text/ecmascript-6">
import card from '@/components/main/card'
export default {
  name: '',
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      num: this.data.length
    }
  },
  components: {card}
}
</script>

<style scoped lang="stylus">
.content
  width 100%
  color: #222;
  padding-top: 40px;
  .el-row
    width 100%
    h4
      font-size: 16px;
      line-height: 26px;
    .el-col-19
      .vouchers-box
        h3
          font-size: 20px;
          line-height: 26px;
          margin-bottom: 8px;
        .vouchers
          margin-bottom: 40px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          padding: 20px;
          .one
            padding-bottom: 20px;
            margin-top: 17px;
            display flex
            .price
              width: 140px;
              height: 89px;
              background-image: url(https://s0.meituan.net/bs/file/?f=meis/meishi.web:assets/74f33f3125908576.png@53635fc);
              background-size: 100% 100%;
              text-align: center;
              padding: 11px 10px 0;
              color: #333;
              font-size: 14px;
              span
                display: block;
                font-size: 30px;
                color: #f60;
                border-bottom: 1px dashed #ccc;
                line-height: 36px;
                margin-bottom: 9px;
                padding-bottom: 8px;
                b
                  font-weight: 400;
                  font-size: 14px;
            .name
              flex 1
              padding-left: 20px;
              font-size: 12px;
              p
                cursor: pointer;
                color: #222;
                font-size: 16px;
                line-height: 22px;
                margin-bottom: 1px;
              .buy
                width: 120px;
                height: 40px;
                font-size: 14px;
                background-color: #f90;
                text-align: center;
                line-height: 40px;
                color: #fff;
                float: right;
                display: inline-block;
                margin-top: 30px;
                border-radius: 100px;
                cursor pointer
          .line
            height: 1px;
            overflow: hidden;
            border-bottom: 1px solid #e5e5e5;
    .el-col-5
      padding-top: 34px;
      padding-left: 10px;
      h4
        margin-left 10px
      .recommend
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        background-color: #fff;
        padding 20px 5px 0

</style>
