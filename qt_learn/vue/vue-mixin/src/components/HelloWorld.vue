<template>
  <div class="hello">
    <button v-debounce="buy">立即购买</button>
    <my-dialog/>
    <my-loading/>
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import MyLoading from './MyLoading'
export default {
  name: 'HelloWorld',
  components: {
    MyDialog,
    MyLoading
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    buy () {
      console.log('time:', new Date().getTime())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
