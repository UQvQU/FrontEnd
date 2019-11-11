<template>
  <div class="mymain">
    <el-row>
      <el-col :span="5">
        <menus/>
      </el-col>
      <el-col :span="19">
        <contents/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <styles/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <film/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <home-stay/>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import menus from '@/components/main/menu'
import contents from '@/components/main/contents'
import styles from '@/components/main/style'
import film from '@/components/main/film'
import HomeStay from '@/components/main/homestay'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    menus,
    contents,
    styles,
    film,
    HomeStay
  }
}
</script>

<style lang="stylus">
</style>
