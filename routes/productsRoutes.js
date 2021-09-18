const express = require('express')
const catchAsync = require('../utils/catchAsync')
const productsRoute = require('../controllers/productsControllers')
const { isAuthor, isLoggedIn } = require('../utils/middleware')
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({ storage })
router = express.Router()

router.get('/getProducts', catchAsync(productsRoute.getProducts))
router.get('/getSingleProduct/:id', catchAsync(productsRoute.getSingleProduct))
router.delete('/deleteProduct/:id/:userID', isLoggedIn, isAuthor, catchAsync(productsRoute.deleteProduct))
router.post('/addProduct/:id', isLoggedIn, upload.array('images'), catchAsync(productsRoute.addProduct))

module.exports = router