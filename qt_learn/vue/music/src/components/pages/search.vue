<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search-box @query="onQueryChange" ref="searchBox"></v-search-box>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
      <!-- 热门搜索 -->
      <v-scroll></v-scroll>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
export default {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    onQueryChange () {

    }
  },
  components: {
    'v-search-box': searchBox,
    'v-scroll': scroll
  }
}
</script>

<style>

</style>
