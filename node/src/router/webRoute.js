import express from 'express'
import homeController from '../controllers/homeController.js'

const router = express.Router()
const webRoute = (app) => {
  router.get('/trangchu', homeController.getHomePage)
  router.get('/sanpham', homeController.getProductPage)

  return app.use('/', router)
}

export default webRoute
