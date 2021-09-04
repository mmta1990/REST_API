const tokenService = require('../services/tokenService')

module.exports = (req, res, next) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send({
      status: 'error',
      code: 401,
      message: 'You Are Not Authorized!'
    })
  }

  const [, tokenValue] = req.headers.authorization.split(' ')
  const token = tokenService.verify(tokenValue)
  if (!token) {
    return res.status(401).send({
      status: 'error',
      code: 401,
      message: 'Your Token Is Not Valid!'
    })
  }
  next()
}
