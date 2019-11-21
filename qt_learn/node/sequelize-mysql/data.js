const Sequelize = require('sequelize')
const sequelize = new Sequelize('sequelize-db', 'root', '123456', {
  host: '127.0.0.1',
  dialect: 'mysql'
})

// shop表的映射 -->  对象关系映射 ORM (Object Relational Mapping)
const Shop = sequelize.define('shops', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  thumb_url: Sequelize.STRING,
  create_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  tableName: 'shops',
  timestamps: false
})

async function SearchShopById (id) {
  // Shop 数据表的映射 -- 对象
  return Shop.findByPk(id)
}

async function CreateShop (shop) {
  console.log('create')
  return Shop.create(shop)
}

module.exports = {
  SearchShopById,
  CreateShop
}