/* eslint-disable no-unused-vars */

const userModel = require('../models/userModel')
const tokenService = require('../services/tokenService')

exports.newSession = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) {
      return res.status(404).send({
        status: 'error',
        sode: 404,
        message: 'آدرس ایمیل یا کلمه عبور اشتباه است!'
      })
    }
    const token = tokenService.sign({ id: user._id })
    res.send({
      status: 'success',
      code: 200,
      token
    })
  } catch (error) {
    next(error)
  }
}
