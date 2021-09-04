const express = require('express')
const router = express.Router()
const sessionsController = require('../controllers/sessionsController')

router.post('/new', sessionsController.newSession)

module.exports = router
