const express = require('express')
const catchAsync = require('../utils/catchAsync')
productsRoute = require('../controllers/productsControllers')
router = express.Router()

router.get('/products', catchAsync(productsRoute.getProducts))