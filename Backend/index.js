const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
const User = require("./models/user.model.js")
const app = express()
const port = 3000

app.use(express.json());
app.use(cors())

app.get("/", (req,res)=>{
    res.send("This is new auth api")
})

app.get("/api/users", async(req,res)=>{
    try{
        const users = await User.find({});
        res.status(200).json(users)
    }
    catch(error){
        res.status(500).json({message:message.error})
    }
})

app.post("/api/newuser",async(req,res) => {
    try{
        const {username,password} = req.body;
        const existingUSer = await User.findOne({username:req.body.username})
        if (existingUSer){
            res.status(200).json({message:"User exists already"})
        }
        else{
        const newUser = await User.create({username,password});
        // console.log(newUser);
        res.status(200).json(newUser);
        }
    }
    catch(error){
        res.status(500).json({message:message.error})
    }
})

app.post("/api/user",async(req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user) return res.status(401).send("User not found");

    if(password !== user.password) return res.status(401).send("Invalid Credentials")

    res.status(200).send("Login Successfull")
})

mongoose.connect("mongodb+srv://manjunathhosamani67:ro0%40tus%23r@backenddb.c4bwabe.mongodb.net/Users?retryWrites=true&w=majority&appName=BackendDB")
    .then(()=>{
        console.log("connected to the database")
        app.listen(port,()=>{
            console.log("Server listening on port", port)
        })
    })