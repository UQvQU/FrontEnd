'use strict';

const md5 = require('md5')
const moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('user', [
      {
        id: 1,
        username: 'tt',
        password: md5('123'),
        disabled: false,
        mobile: '11111111101',
        email: '2991369095@qq.com',
        created_ip_at: '127.0.0.1',
        updated_ip_at: '127.0.0.1',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 2,
        username: 'thx',
        password: md5('123'),
        disabled: false,
        mobile: '11111111102',
        email: '2991369096@qq.com',
        created_ip_at: '127.0.0.2',
        updated_ip_at: '127.0.0.2',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('user', null, {});
  }
};
