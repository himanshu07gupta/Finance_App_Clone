const express = require("express")
const router = express.Router();
const jwt = require("jsonwebtoken")
const z = require("zod")
const {JWT_Token} = require("../config")
const {userschema} = require("../db")
const {checkuser_structure} = require("../zod_validation")

router.post("/signup", async function(req,res){
    const user_data = req.body
    const validate = checkuser_structure.safeParse(user_data);

    if((!validate.success))
    { return res.status(411).json({
     message : "incorrect user data type"
 })}
    
    const check_user = await userschema.findOne({
        email : user_data.email
    }) 
    if(check_user)
    {
        return res.status(411).json({
            message : "user already exists"
        })
    }

    const user = await userschema.create({
        email: user_data.email,
            firstname: user_data.fname,
            lastname: user_data.lname,
            password: user_data.password
    })
    const id = user._id
    
    const token = jwt.sign({
       id
    },JWT_Token)

    res.json({
        message : "data is added succesfully",
        token : token
    })
})

const sigin_schema = z.object({
     email : z.string().email(),
     password : z.string().min(6)
})

router.post("/signin", async function(req,res){
     const check = sigin_schema.safeParse(req.body)
      if(!check.success){
        return res.status(401).send("wrong input")
      }
      
      const existing_user = await userschema.findOne({
         email : req.body.email,
         password : req.body.password
      })

       if(existing_user)
       {
          const token = jwt.sign({
             id : existing_user._id
          },JWT_Token)

          res.status(401).json({
            message : "successfullhy found",
            token : token
          })
       }
       else{
        res.status(401).json({
            message : "wrong password or email"
        })
       }
    
})




module.exports ={
    router
}