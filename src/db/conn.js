const mongoose = require("mongoose");
const express = require("express");
require('dotenv').config(); 
const app = express();

const connectdb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/sometest`)
        console.log(`\n mongodb connect !!! DB host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("mongodb connection is failed",error);
        process.exit(1);
    }
}

connectdb().then(()=>{
        console.log(`connect database successfully`)
})
.catch((error)=>{
console.log("db connection is failed : ", error)
})

module.exports = connectdb;