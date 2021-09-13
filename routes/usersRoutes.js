const express = require("express");
const passport = require("passport");
const catchAsync = require("../utils/catchAsync");
const usersRoute = require("../controllers/usersControllers");
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({ storage })
router = express.Router();
  
router.post("/register", upload.single('image'), catchAsync(usersRoute.userRegistration));
router.post(
  "/login",
  passport.authenticate("local"),
  catchAsync(usersRoute.userLogin)
);
router.post("/logout", catchAsync(usersRoute.userLogout));
router.get("/test", catchAsync(usersRoute.test));

module.exports = router;