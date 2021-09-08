const express = require('express')
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const usersRoute = require('../controllers/usersControllers')
router = express.Router()


router.post('/register', catchAsync(usersRoute.userRegistration))
router.post('/login', catchAsync(usersRoute.userLogin))
router.post('/logout', catchAsync(usersRoute.userLogout))
router.get('/test', catchAsync(usersRoute.test))

 
module.exports = router