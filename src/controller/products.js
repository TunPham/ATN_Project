
const productModel = require('../model/products')
const path = require('path')
const helper = require('../helper/helper')
class Products{
    index(req, res){
        productModel.find()
            .then((results)=>{
                results = helper.multipleMongooseToObject(results)
                res.render('products', {results});
            })
    }

    productDetailPage(req, res){
         productModel.findOne({slug: req.query.slug})
            .then((results)=>{
                results = helper.mongooseToObject(results)
                res.render('productdetail', {results})
            })

    }

    manageProductPage(req, res){
        res.render(
            'manageProducts'
        )
    }

    createProductPage(req, res){
        res.render('createProductPage')
    }

    createProduct(req, res){
        req.body.image = req.files.image.name
        const body = req.body;
        const product = new productModel(body);
        const file = req.files.image;
        file.mv(path.join(__dirname, '../public/uploads', req.files.image.name))
        product.save()
            .then((result) => {
                res.redirect('back')
            })
    }
}

module.exports = new Products()