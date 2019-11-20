<template>
  <el-container class="foodDetail">
    <el-header style="height: 185px">
      <gl-my-header :header="false"></gl-my-header>
    </el-header>
    <el-main>
      <food-detail :data="details" />
      <food-content :data="vouchers" :title="details.title"/>
    </el-main>
  </el-container>
</template>

<script type="text/ecmascript-6">
import FoodDetail from '@/components/food/foodDetail'
import FoodContent from '@/components/food/foodContent'
import { recommend } from '@/assets/data/main'

export default {
  name: 'FoodDescribe',
  data () {
    return {
      details: {}
    }
  },
  mounted: function () {
    // console.log(this.$route.params.id)
    let data = recommend.filter((item) => item.itemId === this.$route.params.id)
    this.details = data[0]
    console.log('details', this.details)
  },
  computed: {
    vouchers () {
      console.log(this.details.vouchers)
      return this.details.vouchers
    }
  },
  components: {
    FoodDetail,
    FoodContent
  }
}
</script>

<style scoped lang="stylus">
</style>
