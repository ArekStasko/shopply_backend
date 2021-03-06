const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    images:{
        type: Array,
        required: true,
    },
    imagesNames:{
        type: Array,
        required: true
    },
    userImage:{
        type: String,
        default: 'https://res.cloudinary.com/dulsntqev/image/upload/v1632066539/default_user.png',
        required: false,
    },
    place:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    subCategory:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: false,
    },
    ship:{
        type: Boolean,
        required: true,
    },
    negotiations:{
        type: Boolean,
        required: true,
    },
    condition:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    userEmail:{
        type: String,
        required: true,
    },
    userID:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Product', ProductSchema)