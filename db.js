const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://he1s3nb3rgg:mongodbatlaS123@cluster0.djqtk.mongodb.net/test';
const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGODB_URI || mongoURI, {dbName:'blog-post'}, ()=>{
        console.log("Connected Successfully!");
    })
}

module.exports = connectToMongo;
