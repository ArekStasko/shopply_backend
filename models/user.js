const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    place:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        default: 'https://res.cloudinary.com/dulsntqev/image/upload/v1632066539/default_user.png',
        required: false,
    },
    phonenumber:{
        type: String,
        required: true,
    }
})

UserSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', UserSchema)