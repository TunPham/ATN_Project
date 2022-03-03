const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator') 

const User = mongoose.Schema({
    userFirstname:{type:String,require:true},
    userLastname:{type:String,require:true},
    userName: {type: String, require:true },
    password: {type: String,require: true},
    author: {type: String,require: true},
    mobile:{type: String,require:true},
    Address:{type:String,require:true},
    

    slug:{
        type: String, slug:'userName', unique: true,
    }
})