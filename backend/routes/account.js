const express = require("express")
const {authmiddleware} = require("../middleware");
const { accountschema, userschema } = require("../db");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.get("/balance",authmiddleware, async function(req,res){
    const id = req.id
     console.log(id)
    const account = await accountschema.findOne({userref_id:id})
    console.log(account)
    if(!account)
    {
        return res.status(401).send("something wrong in this")
    }
    
    res.json({
        "balance" : account.balance
    })
})


router.post("/transfer",authmiddleware, async function(req,res){
    const session = await mongoose.startSession();

    session.startTransaction();
    const senderid = req.id;

    const {transfermoney , receiverid} = req.body
    
    const senderuser = await accountschema.findOne({userref_id : senderid}).session(session)
    if(!senderuser){
        await session.abortTransaction()
        return res.status(401).send("no user find")
    }

    if(transfermoney>senderuser.balance){
        await session.abortTransaction()
        return res.status(400).send("money is not available")
    }

    const receiveruser = await userschema.findOne({_id : receiverid}).session(session)
    if(!receiveruser){
        await session.abortTransaction()
        return res.status(401).send("user doesn't exoist")
    }
    
    await accountschema.updateOne({userref_id : receiverid},{ $inc : {balance : transfermoney}}).session(session)
    await accountschema.updateOne({userref_id : senderid},{ $inc : {balance : -transfermoney}}).session(session)

    await session.commitTransaction();
    res.json({
        "message" : "transfer succefully"
    })
})
module.exports = {
    router
}