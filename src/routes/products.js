const { Router } = require('express');
const express = require('express')
const route = express.Router();
const productsController = require('../controller/products')


route.get('/', productsController.index)

route.get('/best-seller', (req, res) => {
    res.send('best seller');
})

route.get('/productsDetail', productsController.productDetailPage)
route.get('/manage', productsController.manageProductPage)
route.get('/create', productsController.createProductPage)
route.post('/submitCreate', productsController.createProduct)




module.exports = route
