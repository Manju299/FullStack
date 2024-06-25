const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");


const allUsers = mongoose.Schema(
    {
        username:{
            type:String,
            required: [true,"please enter your username"],
        },

        password:{
            type:String,
            requred:[true,"please enter your password"]
        },
    },
    {
        Timestamps: true,
    }
)

const User = mongoose.model("User", allUsers)

module.exports = User