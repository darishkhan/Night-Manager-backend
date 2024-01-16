const mongoose = require('mongoose');
const dotenv = require('dotenv');

 
dotenv.config(); 
const MONGO_URI = process.env.MONGO_URI;
// console.log("mongo url", MONGO_URI);

const connectToMongo = async ()=>{ 
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Mongo connected successfully");
    } catch (error) {
        console.log("ERROR: not connected to Mongo.", error);  
    }
}

module.exports = connectToMongo;
