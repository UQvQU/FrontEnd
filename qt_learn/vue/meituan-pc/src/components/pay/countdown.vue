<template>
  <div class="countdown">
    <i class="icon"></i>
    <span class="text">
      请在
      <span class="time">{{countDownList}}</span>
      内完成支付, 超时订单会自动取消
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      countDownList: '00时00分00秒',
      actEndTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    }
  },
  created () {
    this.countDown()
  },
  methods: {
    timeFormat (param) {
      return param < 10 ? '0' + param : param
    },
    // 记录当前时间
    countDown (it) {
      var interval = setInterval(() => {
        // 获取当前时间，同时得到活动结束时间数组
        let newTime = new Date().getTime() // 对结束时间进行处理渲染到页面
        let endTime = new Date(this.actEndTime).getTime()
        console.log('endTime:', endTime)
        let obj = null // 如果活动未结束，对时间进行处理
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000 // 获取天、时、分、秒
          // let day = parseInt(time / (60 * 60 * 24))
          let hou = parseInt((time % (60 * 60 * 24)) / 3600)
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60)
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60)
          obj = {
            // day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          }
        } else {
          // 活动已结束，全部设置为'00'
          obj = {
            // day: '00',
            hou: '00',
            min: '00',
            sec: '00'
          }
          clearInterval(interval)
        }
        this.countDownList = obj.hou + '时' + obj.min + '分' + obj.sec + '秒'
        // obj.day + '天' + obj.hou + '时' + obj.min + '分' + obj.sec + '秒'
        if (this.countDownList === '23时59分55秒') {
          this.deleteOrder()
        }
      }, 1000)
    },
    // 取消订单
    deleteOrder () {
      console.log(this.countDownList)
      return true
    }
  }
}
</script>

<style scoped lang="stylus">
.countdown {
  height 40px
  line-height 40px
  margin-bottom 20px
  background-color #fff
  box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.1)
  border-radius 4px
  text-align center
  font-size 14px
  color #666

  .icon, .text, .time {
    display inline-block
  }

  .icon {
    width 20px
    height 20px
    vertical-align middle
    background-position 0 -63px
    font-size 0
    background-image url('https://mpay.meituan.com/resource/cashier/img/icon-common@2x.rcJBe.png')
    background-size 168px
  }

  .text {
    margin-left 8px
    vertical-align middle
  }

  .time {
    color #f60
    font-size 18px
  }
}
</style>
