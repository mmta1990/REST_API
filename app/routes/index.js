const userRouter = require('./users')
const sessionRouter = require('./sessions')
// const auth = require('../middlewares/auth') // Global Authorized First Method

module.exports = (app) => {
  app.use('/api/v1/users', userRouter)
  app.use('/api/v1/session', sessionRouter)
  // app.use('/api/v1/users', [auth], userRouter) // Global Authorized First Method
}
