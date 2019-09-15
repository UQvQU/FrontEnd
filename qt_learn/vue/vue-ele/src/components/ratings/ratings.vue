<template>
  <div>
    <div class="ratings">
      <div class="rating" v-for="(rating, index) in ratings" :key="index">
        <div class="user">
          <img :src="rating.avatar" alt="avatar">
        </div>
        <div class="wrapper">
          <div class="user-time">
            <div class="username">{{rating.username}}</div>
            <div class="time"></div>
          </div>
          <div class="score">{{rating.score}}</div>
          <div class="content">{{rating.text}}</div>
          <div class="recommend" v-for="(recommend, ind) in rating.recommend" :key="ind">
            <div>{{recommend}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data() {
    return {
      ratings: []
    }
  },
  components: {},
  created () {
    this.$http.get('http://localhost:8080/static/ratings.json', {})
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.ratings = res.data.data  
        }
      })
  }
}
</script>

<style scoped lang="stylus">
.ratings
  padding 0 20px
  .rating
    display flex
    padding 20px 0 0 0
    .user
      border-radius 10px
      overflow hidden
      width 40px
      height 40px
      img
        width 100%
        height 100%
        border-radius 10rpx
    .wrapper
      flex 1
      padding-left 15px
      .user-time
        display flex
      .score
        color #ff4400
      .content
        padding 15px 0 10px
      .recommend
        div
          display inline-block
          box-sizing border-box
          padding 5px 20px
          margin-bottom 5px
          background-color rgba(202, 225, 255, .5)
          border-radius 5px
          color #63B8FF
          font-size 16px
        
</style>
