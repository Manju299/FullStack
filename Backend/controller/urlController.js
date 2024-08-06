const URL = require("../models/url.model")

async function handleGenerateURL(req,res){
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for(let i=0;i<10;i++){
        const randomIndex = Math.floor(Math.random() * character.length);
        result += character[randomIndex];
    }
    const body = req.body;
    if(!body.content){
        return res.status(400).json({Message: "URL required"})
    }

    const data = await URL.create({
        shortId: result,
        redirectURL: body.content
    });
    return res.status(200).json({shortId: result})
    
}

async function handleSendContent(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId})
    if(result !=null){
        return res.status(200).json(result)
    }
    return res.status(400).json({message: "Enter the valid URL"});
    
}

module.exports = {handleGenerateURL,handleSendContent};