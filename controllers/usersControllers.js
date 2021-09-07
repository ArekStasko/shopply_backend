const User = require('../models/user')


module.exports.userRegistration = async(req, res, next) => {
    res.send('Registration succeded !')
}

module.exports.userLogin = async(req, res, next) => {
    res.send('Login succeded !')
}

module.exports.userLogout = async(req, res, next) => {
    res.send('Logout succeded !')
}