const Product = require('../models/product')
const User = require("../models/user");

module.exports.isLoggedIn = async(req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    if(!user){
        return res.send('you must be logged in')
    }
    next()
}

module.exports.isAuthor = async(req, res, next) => {
  const { id, userID } = req.params
  const product = await Product.findById(id)
  const productUserBuff = Buffer.from(product.userID)
  const userBuff = Buffer.from(userID.toString())

  if(!productUserBuff.equals(userBuff)){
      res.send('You cant do this !')
  }else{
      next()
  }
}