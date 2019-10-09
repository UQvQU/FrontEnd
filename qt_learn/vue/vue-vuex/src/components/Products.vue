<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.title}} - {{product.price}}
        <br/>
        <button>Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  // 组件自身状态
  // 私有的 多个使用的状态中 导致不一致
  // data () {
  //   return {
  //     products: []
  //   }
  // },
  created () {
    // 组件不再接触数据
    this.$store.dispatch('products/getAllProducts')
  },
  computed: mapState({
    products: state => state.products.all
  })
}
</script>

<style scoped>
</style>
