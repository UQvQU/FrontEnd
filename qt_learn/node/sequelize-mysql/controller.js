const { SearchShopById, CreateShop } = require('./data')

module.exports = {
  findById: async (ctx) => {
    let id = ctx.params.id
    const shop = await SearchShopById(id)
    ctx.body = {
      status: 0,
      data: shop
    }
  },
  createShop: async (ctx) => {
    console.log('creat')
    const shop = ctx.request.body
    console.log('shop', shop)
    await CreateShop(shop)
    ctx.body = {
      status: 0
    }
  }
}