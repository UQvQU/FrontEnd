<template>
  <div class="carousel">
    <el-carousel :interval="5000" arrow="always" hight="240px">
      <el-carousel-item v-for="(item, index) in carousel" :key="index">
        <router-link :to="item.url">
          <img :src="item.img" alt="美团">
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script type="text/ecmascript-6">
import { carousel } from '@/assets/data/main'
export default {
  name: '',
  data () {
    return {
      carousel: carousel
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.carousel
  // width 548px
  height: 240px;
  margin: 10px;
  .el-carousel
    // width 100%
    cursor pointer
    height 240px
    .el-carousel__container
      height: 100% !important;
      img
        height: 240px;
</style>
