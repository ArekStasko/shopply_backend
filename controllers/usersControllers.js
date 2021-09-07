const User = require('../models/user')


exports.userRegistration = async(req, res, next) => {
    res.send('Registration succeded !')
}

exports.userLogin = async(req, res, next) => {
    res.send('Login succeded !')
}

exports.userLogout = async(req, res, next) => {
    res.send('Logout succeded !')
}