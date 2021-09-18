const Product = require('../models/product')
const User = require("../models/user");
const cloudinary = require('cloudinary').v2;


exports.getProducts = async(req, res) => {
    const products = await Product.find({})
    res.send(products)
}

exports.getSingleProduct = async(req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    if(!product){
        res.send("Product not found")
    }
    res.send(product)
}

exports.deleteProduct = async(req, res) => {
    try{
        const { id } = req.params
        const product = await Product.findById(id)
        for(let filename of product.imagesNames){
            await cloudinary.uploader.destroy(filename)
        }
        await Product.findByIdAndDelete(id)
        const products = await Product.find({})
        res.send(products)
    }
    catch(e){
        res.send('Whoops we have an error', e)
    }
}

exports.addProduct = async(req, res) => {
    try{
        const { id } = req.params
        const user = await User.findById(id)
        const product = new Product(req.body)
        product.images = req.files.map(item=>item.path)
        product.imagesNames = req.files.map(item=>item.filename)
        product.userID = id
        product.userImage = user.image
        await product.save()
        res.send(product)
    }
    catch(e){
        res.send('We have an error', e)
    }
}