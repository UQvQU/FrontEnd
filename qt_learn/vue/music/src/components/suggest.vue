<template>
  <v-scroll ref="suggest" class="suggest" :data="result" :pull="pullup" :beforeScroll="beforeScroll" @scrollToEnd="searchMore" @beforeScroll="listScroll">
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(item, index) in result" :key="index" @click="selectItem(item)">
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li>
    </ul>
    <div class="no-result-wrapper" v-show="!result.length || !hasMore">
      <span>抱歉，暂无搜索结果</span>
    </div>
  </v-scroll>
</template>

<script type="text/ecmascript-6">
import scroll from '@/components/scroll'
import api from '@/api'
const limit = 20
export default {
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      result: [],
      pullup: true,
      beforeScroll: true,
      hasMore: true,
      page: 1
    }
  },
  methods: {
    // 再次刷新
    refresh () {
      this.$refs.suggest.refresh()
    },
    fetchResult (page) {
      const params = {limit, offset: page - 1, keywords: this.query}
      api.MusicSearch(params).then(res => {
        if (res.code === 200) {
          // 保留上一页数据
          this.result = [...this.result, ...res.result.songs]
        }
      })
    }

  },
  components: {
    'v-scroll': scroll
  }
}
</script>

<style scoped lang="stylus">
</style>
