<template>
  <div>
    <ul>
      <!-- currency 格式化 -->
      <li v-for="(product, index) in products" :key="index">
        {{product.title}}-{{product.price | currency}}
        <button @click="addProductToCart(product)">add</button>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState, mapActions} from 'vuex'
export default {
  name: '',
  data () {
    return {}
  },
  computed: mapState({
    products: state => state.products.all
  }),
  mounted () {
    this.$store.dispatch('products/getAllProducts')
  },
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  components: {}
}
</script>

<style scoped>
</style>
