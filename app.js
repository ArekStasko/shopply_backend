const express = require("express")
const mongoose = require("mongoose")
const LocalStrategy = require('passport-local')
const User = require('./models/user')
const bodyParser = require('body-parser')
const passport = require("passport")

const app = express()


mongoose.connect('mongodb://localhost:27017/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'conection error:'));
db.once('open', () => {
    console.log('database connected')
})

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Passport configuration
app.use(passport.initialize())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//Routes
app.use('/', require('./routes/usersRoutes'))
app.use('/products', require('./routes/productsRoutes'))

app.listen('3000', () => {
    console.log('SERVER IS LISTENING ON PORT 3000')
})