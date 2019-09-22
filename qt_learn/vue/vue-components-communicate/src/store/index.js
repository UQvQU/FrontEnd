import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  count: 1,
  date: '2019.09.20',
  money: 100
}
// mutations 同步  actions 异步
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  },
  makeMoney (state) {
    state.money += 10
  }
}
// 异步
const actions = {
  // makeMoneyAction (context) {
  //   context.commit('makeMoney')
  // }
  // makeMoneyAction ({commit}) {
  //   commit('makeMoney')
  // }
  makeMoneyAction ({commit}) {
    setTimeout(() => {
      commit('makeMoney')
    }, 2000)
    console.log('挣钱')
  }
}

const getters = {
  count: function (state) {
    // return (state.count += 100)
    return state.count
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
