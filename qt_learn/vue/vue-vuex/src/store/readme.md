- 先看页面 再写vuex
  foucs 数据流设计

- modules
  宏观设计项目
  模块 对应于vuex中的一个数据单元
  设计 四大家族构成
  Store 单一状态树

  小型项目不适用vuex 太复杂 直接使用 props+emit 传值
  大型项目 vuex + modules

- 如何区分items
  this.$store.products.items
  this.$store.cart.items

前后端分离

- 传统vue
mounted()
  axios /api/products/
- vuex
  products 数据实际上并没有在vuex中，数据需装载
  actions
  axios /api/products/
  mutation 修改
