const express = require('express')
const route = express.Router();
const productsController = require('../controller/products')
const UserController = require('../controller/user')
route.get('/', UserController.index)
route.get('/loginpage', UserController.index);
route.get('/signuppage', UserController.signuppage);
route.post('/signupSubmit', UserController.createUser)
route.post('/loginSubmit', UserController.login)



module.exports = route