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
            <div class="desc"></div>
            <div class="reply" v-show="list.merchantComment">商家回复：{{list.merchantComment}}</div>
            <div class="imgContent">
              <div class="thumbnails"></div>
              <div class="content-arrow-imgs"></div>
            </div>
            <div class="like">
              <b></b>
              <span>赞</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { comment } from '@/assets/data/food'
export default {
  name: 'foodComment',
  data () {
    return {
      comment: comment
    }
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
    }
  },
  components: {}
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

</style>
