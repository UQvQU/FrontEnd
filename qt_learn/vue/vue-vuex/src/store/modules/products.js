import shop from '../../api/shop'

const state = {
  all: [
    // 假数据
    // {
    //   id: 1,
    //   title: 'iphone11',
    //   price: 4999
    // },
    // {
    //   id: 2,
    //   title: 'iphone10',
    //   price: 3999
    // }
  ]
}
const getters = {}
const actions = {
  // api 请求
  getAllProducts ({commit}) {
    // 请求数据
    shop.getProducts((products) => {
      console.log('前端到api，callback回来', products)
      // mutation
      commit('setProducts', products)
    })
  }
}
const mutations = {
  // 修改数据
  setProducts (state, products) {
    state.all = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
