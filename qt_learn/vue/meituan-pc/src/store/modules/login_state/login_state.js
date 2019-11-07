const state = {
  user: ''
}

const actions = {
  setUser (context, user) {
    context.commit('setUser', user)
  }
}

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

export default {
  namespace: true,
  state,
  actions,
  mutations
}
