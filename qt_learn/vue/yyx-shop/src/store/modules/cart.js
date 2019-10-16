const state = {
  // 购物列表
  items: [
    {
      id: 1,
      quantity: 1
    }
  ],
  // 状态
  checkoutStatus: null
}
// 总价
const getters = {
  cartProducts: (state, getters, rootState) => {
    // 返回购物车中的所有商品item, rootState获取商品模块all的信息
    // id, quantity 是从item中map获取的
    return state.items.map(({id, quantity}) => {
      // 购物车中的商品信息是通过商品id从商品模块all获取的
      const product = rootState.products.all.find(product => product.id === id)
      // console.log(product)
      // 返回购物车显示商品所需的对象
      if (product) {
        return {
          // id: id,
          title: product.title,
          price: product.price,
          quantity
        }
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    // map遍历所有商品
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}
const actions = {
  addProductToCart ({commit}, product) {
    // actions 中只可以读state
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      // 商品库存>0
      // 购物车中是否已含该商品
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        // 不含该商品
        commit('pushProductToCart', {id: product.id})
      } else {
        // 已含该商品，直接增加数量
        commit('incrementItemQuantity', cartItem)
      }
    }
  }
}
const mutations = {
  pushProductToCart (state, {id}) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity (state, {id}) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },
  setCheckoutStatus (state, i) {
    state.checkoutStatus = i
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
