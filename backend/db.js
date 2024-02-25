const mongoose = require("mongoose")
const { string, number } = require("zod")

mongoose.connect("url")

const userschema = mongoose.model("userdata",{
    email : {type :String,require : true}, 
    firstname : {type :String,require : true},
    lastname : String,
    password : {type :String,require :true,minLength:6}
})

const accountschema = mongoose.model("accountdata",{
      userref_id :{
        type : mongoose.Schema.Types.ObjectId,     // taking reference from userschema
        ref : "userschema"
      },
      balance : {
           type : Number,
           require : true
      }
})

module.exports= { 
    userschema,
   accountschema
}
