import express from 'express'
import homeController from '../controllers/homeController.js'

const router = express.Router()
const webRoute = (app) => {
  router.get('/sanpham', homeController.getHomePage)
  router.get('/them', homeController.getAddPage)
  router.get('/chitiet/:id', homeController.getDetailsProduct)

  router.post('/them', homeController.addProduct)

  return app.use('/', router)
}

export default webRoute
