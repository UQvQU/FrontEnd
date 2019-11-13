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
        <recommend/>
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
import recommend from '@/components/main/recommend'
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
    recommend,
    HomeStay
  }
}
</script>

<style lang="stylus">
</style>
