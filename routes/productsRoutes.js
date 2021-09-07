const express = require('express')
const catchAsync = require('../utils/catchAsync')
const productsRoute = require('../controllers/productsControllers')
router = express.Router()

router.get('/', catchAsync(productsRoute.getProducts))

module.exports = router