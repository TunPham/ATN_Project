const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator') 

const Product = mongoose.Schema({
    name: {type: String, require: true},
    price: {type: Number, require: true},
    description: {type: String, require: true},
    image: {type: String, require: true},
    quantity:{type: Number, default: 0},
    categoryId:{ type : String, require: true},
    brand:{ type: String, require: true},
    slug:{
        type: String, slug: 'name', unique: true,
    } // Cơ chế của hoạt động của slug : Lấy name của sản phẩm , sau đó lowercase toàn bộ, dấu cách sẽ được thay bằng " - " và để lên url
},{
    timestamps: true // Tu dong tao ra ngay thang tao san pham va ngay thang cap nhat gan nhat
})

mongoose.plugin(slug);
x
module.exports = mongoose.model('products', Product) // tham so 1 la ten table ( ở đây là products), tham so 2 la doi tuong Product duoc tao o tren dòng 4
