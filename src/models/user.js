const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true 
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
       
    },
   
    password: {
        type: String,
        required: true

    }
},
{timestamps: true}
);

 const User = mongoose.model("Sometesting",userSchema)

 module.exports = User;