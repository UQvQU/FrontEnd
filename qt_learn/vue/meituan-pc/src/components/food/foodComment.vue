<template>
  <div class="comment">
    <div class="total">{{comment.total}}条网友点评</div>
    <div class="comment-content">
      <div class="tags">
        <span v-for="(tag, index) in comment.tags" :key="index">{{tag.tag}}({{tag.count}})</span>
      </div>
      <div class="list-box">
        <div class="list" v-for="(list, index) in comment.commentList " :key="index">
          <div class="header">
            <div class="imgbox"><img :src="list.userUrl" alt=""></div>
          </div>
          <div class="info">
            <div class="name">{{list.userName}}</div>
            <div class="date" v-show="list.commentTime">{{getCommentTime(list.commentTime)}}</div>
            <div class="source">{{list.star}}</div>
            <div class="desc">{{list.comment}}</div>
            <div class="reply" v-show="list.merchantComment">商家回复：{{list.merchantComment}}</div>
            <div class="imageViewer" v-show="list.picUrls.length != 0">
              <div class="imgContent" :data-index="index" ref="imgContent">
                <div class="paginatedThumbnails">
                  <div class="thumbnails">
                    <div class="thumbnail" :class="{active: pic.id == imgId}" v-for="pic in list.picUrls" :key="pic.id">
                      <img @click="getImg($event)"  :data-index="index" :data-id="pic.id" :src="pic.url" alt="">
                    </div>
                  </div>
                </div>
                <div class="content-arrow-imgs">
                  <div class="figure" style="max-height: 204px;">
                    <div class="image-box" >
                      <img :src="img" v-show="index == imgIndex" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="like-cont">
              <div class="like">
                <b @click="like" :class="{active: isActive}"></b>
                <span>赞</span>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { comment } from '@/assets/data/food'
import { mapState } from 'vuex'
export default {
  name: 'foodComment',
  data () {
    return {
      comment: comment,
      img: '',
      imgIndex: '',
      show: false,
      imgId: '',
      isActive: false
    }
  },
  computed: {
    ...mapState({
      user: state => state.loginState.user
    })
  },
  methods: {
    getCommentTime (time) {
      if (!time) return
      let date = new Date(parseInt(time))
      let seperator1 = '-'
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      var commentTime = year + seperator1 + month + seperator1 + strDate
      return commentTime
    },
    getImg (event) {
      // console.log(event.target.src, event.target.dataset.index)
      let target = event.target
      this.img = target.src
      this.imgIndex = target.dataset.index
      this.imgId = target.dataset.id
    },
    like () {
      if (this.user) {
        this.isActive = true
      } else {
        this.$message('请先登录')
      }
    }
  },
}
</script>

<style scoped lang="stylus">
.comment
  margin-bottom: 40px;
  .total
    font-size: 20px;
    line-height: 26px;
  .comment-content
    margin-top: 8px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 0 20px 40px;
    color: #666;
    .tags
      padding-top: 15px;
      box-sizing border-box
      display flex
      flex-wrap wrap
      span
        display inline-block;
        font-size: 14px;
        line-height: 34px;
        padding: 0 10px;
        border: 1px solid #e5e5e5;
        border-radius: 2px;
        margin: 0 10px 10px 0
        cursor: pointer
    .list-box
      .list
        padding: 30px 0 0;
        box-sizing border-box
        display flex
        .header
          width: 60px;
          height: 60px;
          .imgbox
            width 100%
            height 100%
            border-radius: 50%;
            overflow hidden
            img
              width 100%
              height 100%
        .info
          flex 1
          padding-left: 20px;
          box-sizing border-box
          .name
            font-size: 16px;
            color: #222;
            line-height: 22px;
            margin-bottom: 1px;
          .date
            font-size: 12px;
            line-height: 20px;
            color: #999;
            float: right;
          .source
            line-height: 14px;
            margin-top: 3px;
            height: 16px;
            font-size: 11px;
          .desc
            font-size: 14px;
            line-height: 20px;
            padding-top: 13px;
          .reply
            font-size: 14px;
            color: #31bbac;
            padding-top: 12px;
          .imageViewer
            padding-top: 10px;
            position: static;
            background: #fff;
            overflow: hidden;
            cursor: pointer;
            font-family: iconfont!important;
            font-size: 12px;
            font-style: normal;
            width: 100%;
            z-index: 2001;
            left: 0;
            top: 0;
            .imgContent
              width 100%
              padding-top: 180px;
              position: relative;
              margin: 0;
              overflow hidden
              .paginatedThumbnails
                width: 828px;
                height: 160px;
                position: absolute;
                top: 0;
                left: 0;
                // bottom: 20px;
                overflow: hidden;
                .thumbnails
                  position: relative;
                  width: 10000px;
                  height 100%
                  .thumbnail
                    width: 160px;
                    height: 160px;
                    border: 10px solid #fff;
                    cursor: pointer;
                    display: inline-block;
                    box-sizing: border-box;
                    border-radius 4px
                    &.active
                      border-color: #f4f4f4;
                      border-radius: 0;
                    img
                      width 140px
                      height 140px
              .content-arrow-imgs
                width: 460px;
                .figure
                  overflow hidden
                  width: 460px
                  .image-box
                    width 100%
                    height 100%
                    img
                      display: block;
                      height: auto;
                      margin: 0 auto;
                      max-width: 100%;
          .like-cont
            text-align: right;
            margin: 17px 0 16px;
            .like
              display: inline-block;
              cursor: pointer;
              font-size: 12px;
              color: #666;
              b
                background-image: url(https://s0.meituan.net/bs/file/?f=meis/meishi.web:assets/a9850ffbcbd6b5e6.png@53635fc);
                background-size: 100% 100%;
                width: 15px;
                height: 16px;
                display: inline-block;
                margin-right: 6px;
                vertical-align: text-bottom;
                &.active
                  background-image url(https://s0.meituan.net/bs/file/?f=meis/meishi.web:assets/73408bd03eeb3096.png@53635fc)
          .line
            height: 1px;
            overflow: hidden;
            border-bottom: 1px solid #e5e5e5;

</style>
