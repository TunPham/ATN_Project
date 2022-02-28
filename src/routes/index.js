const productRouter = require('./products')
const indexController = require('../controller/site')
const userrouter = require('./users')
function route(app){
    app.get('/', indexController.index)

    app.use('/products', productRouter)

    app.use('/user', userrouter)
}

module.exports = route



