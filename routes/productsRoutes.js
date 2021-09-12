const express = require('express')
const catchAsync = require('../utils/catchAsync')
const productsRoute = require('../controllers/productsControllers')
const { isLoggedIn, isAuthor } = require('../utils/middleware')
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({ storage })
router = express.Router()

router.get('/getProducts', catchAsync(productsRoute.getProducts))
router.get('/getSingleProduct/:id', catchAsync(productsRoute.getSingleProduct))
router.delete('/deleteProduct/:id', isLoggedIn, isAuthor, catchAsync(productsRoute.deleteProduct))
router.post('/addProduct', isLoggedIn, catchAsync(productsRoute.addProduct))
router.post('/imageTest', upload.array('images'), catchAsync(productsRoute.imageTest))



module.exports = router