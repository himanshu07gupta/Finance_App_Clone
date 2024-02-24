const mongoose = require("mongoose")
const { string } = require("zod")

mongoose.connect("mongodb+srv://himanshu29g:hBe2kpmGT07By2Kk@cluster29.4exe8km.mongodb.net/paytm")

const userschema = mongoose.model("userdata",{
    email : {type :String,require : String}, 
    firstname : {type :String,require : String},
    lastname : String,
    password : {type :String,require : String,minLength:6}
})

module.exports= { 
    userschema
}