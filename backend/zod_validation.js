const z = require("zod")

const checkuser_structure = z.object({
    email :z.string().email(),
    fname : z.string(),
    lname : z.string(),
    password :z.string().min(6)
})

module.exports ={
    checkuser_structure
}