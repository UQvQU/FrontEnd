// 从shop中获取所有的商品信息
import shop from '../../api/shop'
const state = {
  // 所有商品
  all: []
}
const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  decrementProductInventory (state, {id}) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}
const actions = {
  getAllProducts ({commit}) {
    // api请求
    shop.getProducts((products) => {
      commit('setProducts', products)
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
