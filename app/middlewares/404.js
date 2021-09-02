module.exports = (app) => {
  app.use((req, res, next) => {
    res.status(404).send({
      code: 'Not Found',
      status: 404,
      message: 'Requested resource Could Not Be Found!'
    })
  })
}
