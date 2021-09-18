const Product = require('../models/product')

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
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