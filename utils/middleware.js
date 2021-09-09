const Product = require('../models/product')

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        return res.send('you must be logged in')
    }
    next()
}

module.exports.isAuthor = async(req, res, next) => {
  const { id } = req.params
  const product = await Product.findById(id)
  if(!product.author.equals(req.user._id)){
      res.send('You cant do this !')
  }
  next()
}