<template>
  <el-row class="topbar">
    <el-col :span="5">
      <city/>
    </el-col>
    <el-col :span="11">
      <user/>
    </el-col>
    <el-col :span="8">
      <navbar/>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
import city from '@/components/Header/TopBar/city'
import user from '@/components/Header/TopBar/user'
import navbar from '@/components/Header/TopBar/navbar'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    city,
    user,
    navbar
  }
}
</script>

<style scoped lang="stylus">
.topbar{
      width: 1190px;
      margin: 0 auto;
  }
</style>
