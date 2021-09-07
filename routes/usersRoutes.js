const express = require('express')
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
usersRoute = require('../controllers/usersControllers')
router = express.Router()


router.post('/register', catchAsync(usersRoute.userRegistration))
router.post('/login', catchAsync(usersRoute.userLogin))
router.post('/logout', catchAsync(userRoute.userLogout))

module.exports = router