<template>
  <div class="search-box">
    <i class="icon icon-search">&#xe638;</i>
    <input type="text" ref="query" v-model="query" class="box" placeholder="placehoder">
    <i class="icon icon-dismiss" v-show="query" @click="clear"></i>
  </div>
</template>

<script>
import {debounce} from '@/common/until'
export default {
  props: {
    placehoder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    clear () {
      this.query = ''
    },
    setQuery (query) {
      this.query = query
    },
    blur () {
      this.$ref.query.blur()
    }
  },
  // 监听用户输入，进行搜索，设置防抖
  created () {
    this.$watch('query', debounce((newQuery) => {
      // 抛出一个query方法
      this.$emit('query', newQuery)
    }, 500))
  }
}
</script>
<style lang='stylus' scoped>
@import '../assets/css/function'
.search-box
  display flex
  align-items center
  box-sizing border-box
  width 100%
  padding 0 px2rem(8px)
  height px2rem(74px)
  background #2f3054
  border-radius 6px
  .icon-search
    font-size 24px
    color #6b6a6a
  .box
    flex 1
    margin 0 5px
    line-height px2rem(36px)
    background #2f3054
    color #fff
    font-size 14px
    outline 0
    &:placeholder
      color hsla(0, 0%, 100%, 0.3)
  .icon-dismiss
    font-size 20px
    margin-right px2rem(10px)
    color #6b6a6a
</style>
