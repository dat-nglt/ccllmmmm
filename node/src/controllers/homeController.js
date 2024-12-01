import express from 'express'
import productModel from '../models/productModel.js'

const getHomePage = async (req, res) => {
  try {
    const dataProducts = await productModel.getAllProducts()

    res.render('main', {
      data: {
        title: 'Trang chủ',
        page: 'home',
        dataProducts
      }
    })
  } catch (error) {
    res.send(error)
  }
}

const getProductPage = (req, res) => {
  res.send('This is home')
}

export default { getHomePage, getProductPage }
