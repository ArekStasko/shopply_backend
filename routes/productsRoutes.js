const express = require('express')
const catchAsync = require('../utils/catchAsync')
const productsRoute = require('../controllers/productsControllers')
const { isLoggedIn, isAuthor } = require('../utils/middleware')
router = express.Router()

router.get('/getProducts', catchAsync(productsRoute.getProducts))
router.get('/getSingleProduct/:id', catchAsync(productsRoute.getSingleProduct))
router.delete('/deleteProduct/:id', isAuthor, catchAsync(productsRoute.deleteProduct))
router.post('/addProduct', isLoggedIn, catchAsync(productsRoute.addProduct))


module.exports = router