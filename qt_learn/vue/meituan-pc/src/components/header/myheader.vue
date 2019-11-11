<template>
  <div class="myheader">
    <el-row>
      <el-col>
        <top-bar></top-bar>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <search-bar :header="header"></search-bar>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import TopBar from './topbar/topbar'
import SearchBar from './searchbar/searchbar'
export default {
  name: '',
  props: {
    header: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
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
  box-shadow 0 2px 27px 0 rgba(0, 0, 0, 0.10)
</style>
