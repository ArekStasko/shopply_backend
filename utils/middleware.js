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
  if(!product.userID.equals(req.user._id)){
      res.send('You cant do this !')
  }
    /*
  const { id } = req.params
  const product = await Product.findById(id)
  console.log('id usera: ',req.user._id)
  console.log('id usera produktu: ',product.userID)
  */
 console.log('isAuthor is ok')
  next()
}