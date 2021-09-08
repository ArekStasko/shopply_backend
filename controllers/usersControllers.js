const User = require('../models/user')
const passport = require('passport')

module.exports.userRegistration = async(req, res, next) => {
   try{
       const {email, username, place, phonenumber, password} = req.body
       const user = new User({email, username, place, phonenumber})
       const registeredUser = await User.register(user, password)
       console.log('dziala')
       req.login(registeredUser, err=>{
           if(err) return next(err)
           res.send(String(req.user))
       })
   }
   catch(e) {
       res.send('Whoops we have an error: ', e)
   }
}

module.exports.userLogin = async(req, res, next) => {
    res.send('Login succeded !')
}

module.exports.userLogout = async(req, res, next) => {
    res.send('Logout succeded !')
}

module.exports.test = async(req, res, next) => {
    const users = await User.find({})
    res.send(users)
}