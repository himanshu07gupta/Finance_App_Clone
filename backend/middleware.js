const express = require("express");
const { JWT_Token } = require("./config");
const jwt = require("jsonwebtoken")

///// verify that it is write token..

const authmiddleware = (req,res,next) =>{
    const authheader = req.headers.authorization
    
    if(!authheader || !authheader.startsWith('Bearer ')){
        return res.status(401).json({
            message : "no token"
        })
    }

    const token = authheader.split(" ")[1];

    try{
        const decode = jwt.verify(token,JWT_Token);
        
        if(decode){
            req.id = decode.id 
            
            next()
        }
        else{
            return res.status(401).send("unable to decdoe id")
        }
    }catch(err){
        return res.status(403).send("something wrong")
    }
}

module.exports={
    authmiddleware
}