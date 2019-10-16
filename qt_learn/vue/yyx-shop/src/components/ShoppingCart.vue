<template>
  <div>
    <h2>Your Cart</h2>
    <p v-if="!products.length">
      <i>Please add some products to cart</i>
    </p>
    <ul v-else>
      <li v-for="(product, index) in products" :key="index">
        {{product.title}} - {{product.price | currency}} * {{product.quantity}}
      </li>
    </ul>
    <p>Total: {{total}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapGetters, mapState} from 'vuex'
export default {
  name: '',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  components: {}
}
</script>

<style scoped>
</style>
