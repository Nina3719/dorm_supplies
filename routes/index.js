const express = require('express')
const router = express.Router()

const users = require('../controllers/users')


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


/*
* ~~~~ Routes for items ~~~~
*/


module.exports = router
