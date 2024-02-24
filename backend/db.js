const mongoose = require("mongoose")
const { string } = require("zod")

mongoose.connect("url")

const userschema = mongoose.model("userdata",{
    email : {type :String,require : String}, 
    firstname : {type :String,require : String},
    lastname : String,
    password : {type :String,require : String,minLength:6}
})

module.exports= { 
    userschema
}
