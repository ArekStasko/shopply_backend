const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    place:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    }

})

UserSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', UserSchema)