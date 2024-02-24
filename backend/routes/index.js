const express = require("express")
const userrouter = require("./users")
const router = express.Router()

router.use("/user",userrouter.router)
module.exports ={
    router
}