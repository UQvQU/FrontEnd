const router = require('koa-router')()
const orderService = require('../controllers/orderController')
// https://blog.csdn.net/qq_36718999/article/details/99836762

router.prefix('/orders')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
// 根据用户id获取订单信息
router.post('/findOrdersByUserId', function(ctx, next) {
  let userId = ctx.request.body.id
  await orderService.findAllOrdersByUserId(userId).then(async res => {
    if (res.length) {
      ctx.body = {
        code: '800000',
        data: res,
        mess: '查找成功'
      }
    } else {
      ctx.body = {
        code: '800004',
        data: 'error',
        mess: '查找失败'
      }
    }
  }).catch(err => {
    ctx.body = {
      code = '800002',
      data: err
    }
  })
})
// 增加订单
router.post('/insertOrder', async(ctx, next) => {
  let _userId = ctx.request.body.userId
  let _productId = ctx.request.body.productId
  let _index = ctx.request.body.index
  let _count = ctx.request.body.count
  let _status = ctx.request.body.status
  let _submitTime = ctx.request.body.submitTime
  console.log('insertOrder', ctx.request.body)
  if (!_userId || !_productId || !_index || !_count || !_status || !_submitTime) {
    ctx.body = {
      code: '800001',
      mess: '订单信息不完整'
    }
    return
  }
  // // 订单信息整合
  // let order = {
  //   userId: _userId,
  //   productId: _productId,
  //   index: _index,
  //   count: _count,
  //   status: _status,
  //   submitTime: _submitTime
  // }

  // 新增订单信息
  await orderService.insertOrder([_userId, _productId, _index, _count, _status, _submitTime]).then(res => {
    if (res.affectedRows > 0) {
      ctx.body = {
        code: '800000',
        data: 'ok',
        mess: '增加成功'
      }
    } else {
      ctx.body = {
        code: '800004',
        data: 'error',
        mess: '增加失败'
      }
    }
  })
})
// 修改订单状态
router.post('/updateOrderStatus', async (ctx, next) => {
  var _status = ctx.request.body.status
  var _id = ctx.request.body.id
  if (!_status || !_id) {
    ctx.body = {
      code: '800001',
      mess: '信息不完整'
    }
    return
  }
  console.log('updateOrder', _status)
  // 更新订单状态信息
  await orderService.updateOrderStatus([_status, _id]).then(res => {
    if (res.affectedRows > 0) {
      ctx.body = {
        code: '800000',
        data: 'ok',
        mess: '更新成功'
      }
    } else {
      ctx.body = {
        code: '800004',
        data: 'error',
        mess: '更新失败'
      }
    }
  })
})

module.exports = router