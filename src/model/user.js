const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator') 

const User = mongoose.Schema({
    userName: {type: String, require:true },
    password: {type: String,require: true},
    author: {type: String,require: true},

    slug:{
        type: String, slug:'userName', unique: true,
    }
})