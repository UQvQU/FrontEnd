const state = {
  // 登录状态
  on_or_up: 'on',
  show_login_dialog: false,
  sing_on: false,
  user_info: {
    id: 1,
    avatar_url: 'https://avatars2.githubusercontent.com/u/10172415?s=40&v=4',
    userName: 'TT'
  }
}
const actions = {
  change_show_state (context) {
    context.commit('change_show_state')
  }
}
const mutations = {
  change_show_state (state) {
    state.show_login_dialog = !state.show_login_dialog
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
