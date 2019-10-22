<template>
  <div class="myheader">
    <el-row>
      <el-col>
        <top-bar></top-bar>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <search-bar></search-bar>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import TopBar from './topbar/topbar'
import SearchBar from './searchbar/searchbar'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    TopBar,
    SearchBar
  }
}
</script>

<style scoped lang="stylus">
.myheader
  height 40px
  line-height 40px
</style>
