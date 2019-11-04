<template>
  <el-container>
    <el-header style="height: 200px">
      <my-header></my-header>
    </el-header>
    <el-main>
      <my-main></my-main>
    </el-main>
    <el-footer>
      <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>

<script type="text/ecmascript-6">
import MyFooter from '@/components/footer/myfooter'
import MyHeader from '@/components/header/myheader'
import MyMain from '@/components/main/mymain'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    MyHeader,
    MyMain,
    MyFooter
  }
}
</script>

<style scoped lang="stylus">
.el-container
  background-color #f8f8f8
</style>
