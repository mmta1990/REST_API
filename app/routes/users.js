const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const auth = require('../middlewares/auth') // Global Authorized Second Method

// router.use(auth) // Global Authorized Second Method

router.get('/', [auth], usersController.usersList) // path: /api/v1/users
router.post('/', usersController.addUser) // path: /api/v1/users
router.get('/:id', usersController.getUser) // path: /api/v1/users
router.delete('/:id', usersController.removeUser) // path: /api/v1/users
router.patch('/:id', usersController.updateUser) // path: /api/v1/users

module.exports = router
