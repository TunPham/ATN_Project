const express = require('express')
const route = express.Router();
const productsController = require('../controller/products')


route.get('/', productsController.index)

route.get('/best-seller', (req, res) => {
    res.send('best seller');
})


module.exports = route
