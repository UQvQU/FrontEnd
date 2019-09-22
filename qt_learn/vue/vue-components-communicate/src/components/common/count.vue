<template>
  <div>
    <h3>{{msg}}</h3>
    <hr/>
    <!-- <h3>{{$store.state.count}}</h3> -->
    <h3>{{count}}</h3>
    <button @click="add(10)">+</button>
    <button @click="$store.commit('reduce')">-</button>
    <p>{{date}}</p>
    <hr/>
    <p>{{money}}</p>
    <button @click="makeMoneyAction">挣钱</button>
  </div>

</template>

<script type="text/ecmascript-6">
import store from '@/store/index.js'
// mapState:取state中的数据，mapMutations:取mutation中的方法
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: '',
  data () {
    return {
      msg: 'hello Vuex'
    }
  },
  store,
  components: {},
  // computed: mapState(['date']),
  // computed: {
  //   date () {
  //     return this.$store.state.date
  //   }
  // }
  // computed: mapState({
  //   date: state => state.date
  // }),
  computed: {
    ...mapState(['date', 'money']),
    // count () {
    //   return this.$store.getters.count
    // }
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['makeMoneyAction'])
  }
}
</script>

<style scoped >
</style>
