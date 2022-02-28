const express = require('express')
const route = express.Router();
const productsController = require('../controller/products')
const UserController = require('../controller/user')
route.get('/', UserController.index)
route.get('/loginpage', UserController.index);
route.get('/signuppage', UserController.signuppage);


module.exports = route