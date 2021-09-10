const Product = require('../models/product')

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
        await Product.findByIdAndDelete(id)
        res.send('Succesfull deleted product')
    }
    catch(e){
        res.send('Whoops we have an error', e)
    }
}

exports.addProduct = async(req, res) => {
    try{
        const product = new Product(req.body)
        product.userID = req.user._id
        await product.save()
        res.send('Successfull added product !')
    }
    catch(e){
        res.send('We have an error', e)
    }
}