const express = require("express")
const mongoose = require("mongoose")

const app = express()


mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
   // useFindAndModify: false
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'conection error:'));
db.once('open', () => {
    console.log('database connected')
})

app.use('/', (req, res)=>{
    res.send('Hello World !')
})

app.listen('3000', () => {
    console.log('SERVER IS LISTENING ON PORT 3000')
})