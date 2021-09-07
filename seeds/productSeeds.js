const mongoose = require('mongoose')
const Product = require('../models/product')

mongoose.connect('mongodb://localhost:27017/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async() => {
    await Product.deleteMany({})
    for(let i=0; i<10; i++){
        const product = new Product({
            title:'Example title',
            description:'Example title Example title Example title Example title',
            price:39.99,
            imgSource:[
                'https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                'https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            ],
            userImage:'https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            place:'Example title',
            category:'Example title',
            subCategory:'Example title',
            userName:'Example title',
            ship:true,
            negotiations:true,
            condition:'Example title',
            phoneNumber:'123456789',
            userEmail:'example@gmail.com',
            userID:'d11dftgazt3'
        })
        await product.save()
    }
}

seedDB().then(()=>{
    mongoose.connection.close()
})