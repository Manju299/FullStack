const User = require("../models/user.model")



async function handleGetUser(req,res){
    try{
        const users = await User.find({});
        return res.status(200).json(users)
    }
    catch(error){
        return res.status(500).json({message:message.error})
    }
}

async function handleCreateNewUser(req,res){
    try{
        const {username,password} = req.body;
        const existingUSer = await User.findOne({username:req.body.username})
        if (existingUSer){
            return res.status(200).json({message:"User exists already"})
        }
        else{
        const newUser = await User.create({username,password});
        // console.log(newUser);
        return res.status(200).json(newUser);
        }
    }
    catch(error){
       return res.status(500).json({message:message.error})
    }
}

async function handleUserLogin(req,res){
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user) return res.status(401).send("User not found");

    if(password !== user.password) return res.status(401).send("Invalid Credentials")
        return res.status(200).send("Login Successfull")
}

module.exports = {
    handleGetUser,
    handleCreateNewUser,
    handleUserLogin}