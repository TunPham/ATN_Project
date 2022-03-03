const res = require("express/lib/response")
const userModel = require('../model/user')

class UserController {
    index(req, res) {
        res.render('loginpage')
    }

    signuppage(req, res) {
        res.render('signuppage')
    }

    createUser(req, res) {
        const body = req.body;
        const user = new userModel(body)
        user.save()
            .then((results) => {
                res.redirect('/user/loginpage')
            })
    }

    login(req, res) {
        const userName = req.body.userName;
        const password = req.body.password;
        userModel.find({ userName: userName, password: password })
            .then((results) => {
                res.cookie('user', results)
            })
    }
}

module.exports = new UserController
