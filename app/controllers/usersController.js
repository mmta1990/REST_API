/* eslint-disable camelcase */
const UserModel = require('../models/userModel')

const usersList = async (req, res, next) => {
  const users = await UserModel.find({})
  res.send({
    success: true,
    message: 'لیست کاربران با موفقیت ایجاد شد',
    data: {
      users
    }
  })
}

const addUser = async (req, res, next) => {
  try {
    const { first_name, last_name, mobile, email } = req.body
    if (first_name === undefined || last_name === undefined) {
      return res.status(422).send({
        error: true,
        message: 'اطلاعات ارسالی برای ایجاد کاربر معتبر نمی باشد'
      })
    }
    const newUser = new UserModel({
      first_name,
      last_name,
      mobile,
      email
    })
    await newUser.save()
    res.status(201).send({
      success: true,
      message: 'کاربر جدید با موفقیت ایجاد شد',
      newUser
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  usersList,
  addUser
}
