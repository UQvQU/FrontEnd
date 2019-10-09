import Vue from 'vue'
import Vuex from 'vuex'

// Vue prototype vuex功能
// mapActions mapGetters this.$store this.$router
Vue.use(Vuex)

const state = {
  // 状态
  count: 0
}
const mutations = {
  // 修改状态
}
const actions = {

}
const getters = {

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
