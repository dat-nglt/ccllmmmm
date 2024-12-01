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

const getAddPage = async (req, res) => {
  try {
    const dataProducts = await productModel.getAllProducts()

    res.render('main', {
      data: {
        title: 'Trang chủ',
        page: 'add'
      }
    })
  } catch (error) {
    res.send(error)
  }
}

const getDetailsProduct = async (req, res) => {
  const idProduct = req.params.id

  const dataProduct = await productModel.getDetailsProduct(idProduct)

  res.render('main', {
    data: {
      title: 'Trang chủ',
      page: 'details',
      dataProduct
    }
  })
}

const addProduct = async (req, res) => {
  const { productname, price, description } = req.body

  const isAdded = await productModel.addProduct(productname, price, description)

  if (!isAdded) {
    res.redirect('http://localhost:3000/them')
  }

  res.redirect('http://localhost:3000/sanpham')
}

export default { getHomePage, getAddPage, getDetailsProduct, addProduct }
