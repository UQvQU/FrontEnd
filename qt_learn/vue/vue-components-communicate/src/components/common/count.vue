<template>
  <div>
    <h3>{{msg}}</h3>
    <hr/>
    <h3>{{$store.state.count}}</h3>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
  </div>

</template>

<script type="text/ecmascript-6">
import store from '@/store/index.js'
export default {
  name: '',
  data () {
    return {
      msg: 'hello Vuex'
    }
  },
  store,
  components: {}
}
</script>

<style scoped >
</style>
