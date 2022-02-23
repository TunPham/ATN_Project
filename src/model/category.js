const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator') 
const Category = mongoose.Schema({
    name:{ type: String, require: true},
    slug:{type: String, slug: 'name'},
},
{
 timestamps: true
}
)
 
mongoose.plugin(slug);
module.exports = mongoose.model('category', Category)