const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get('/', usersController.usersList) // path: /api/v1/users
router.post('/', usersController.addUser) // path: /api/v1/users

module.exports = router
