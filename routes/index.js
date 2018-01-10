const express = require('express')
const router = express.Router()

const users = require('../controllers/users')
const items = require('../controllers/items')

/*
* ~~~~ Routes for users ~~~~
*/
router.route('/users')
  .get(users.getAllUsers)
  .post(users.createUser)

router.route('/users/:userId/id')
  .get(users.getUserById)
  .put(users.updateUser)
  .delete(users.deleteUser)

router.route('/users/:email/email')
  .get(users.getUserByEmail)

// router.route('/users/:userId/cart')
//   .get(users.getItemsInCart)
//   .post(users.addItemInCart)
//
// router.route('/users/:userId/cart/itemId')
//   .put(users.updateCart)
//   .delete(users.deleteItemInCart)

router.route('/users/orders')
  .get(users.getAllOrders)

router.route('/users/:userId/orders')
  .get(users.getAllUserOrders)
  .post(users.createOrder)

// router.route('/users/:userId/orders/:number')
//   .get(users.getOrderById)
//   .put(users.updateOrder)
//   .delete(users.deleteOrder)



/*
* ~~~~ Routes for items ~~~~
*/
router.route('/items')
  .get(items.getAllItems)
  .post(items.createItem)

router.route('/items/:itemId/id')
  .get(items.getItemById)
  .put(items.updateItem)
  .delete(items.deleteItem)

router.route('/items/stock')
  .get(items.getItemsInStock)

module.exports = router
