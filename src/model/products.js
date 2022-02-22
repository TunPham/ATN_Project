const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator') 

const Product = mongoose.Schema({
    name: {type: String, require: true},
    price: {type: Number, require: true},
    description: {type: String, require: true},
    image: {type: String, require: true},
    quantity:{type: Number, default: 0},
    slug:{
        type: String, slug: 'name', unique: true,
    }
},{
    timestamps: true // Tu dong tao ra ngay thang tao san pham va ngay thang cap nhat gan nhat
})

mongoose.plugin(slug);

module.exports = mongoose.model('products', Product) // tham so 1 la ten db, tham so 2 la doi tuong Product duoc tao o tren