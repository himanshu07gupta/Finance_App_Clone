const express = require("express")
const userrouter = require("./users")
const accountrouter = require("./account")
const router = express.Router()

router.use("/user",userrouter.router)
router.use("/account",accountrouter.router)
module.exports ={
    router
}