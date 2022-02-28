const res = require("express/lib/response")

class UserController{
    index(req,res){
        res.render('loginpage')
    }
    
    signuppage(req,res){
            res.render('signuppage')
    }
} 

module.exports = new UserController
