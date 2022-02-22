const productRouter = require('./products')
const indexController = require('../controller/site')

function route(app){
    app.get('/', indexController.index)

    app.use('/products', productRouter)
}

module.exports = route



