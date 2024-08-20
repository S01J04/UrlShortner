const  Jwt  = require("jsonwebtoken");

const secret="This is my fucking secret key dont you dare to hack it"
const setuser= async(data)=>{
      return  await Jwt.sign({
        _id:data._id,
        name:data.name,
        email:data.email,
      },secret)
}
const getuser=async (tokken)=>{
        return   await Jwt.verify(tokken,secret)
}
module.exports={
    setuser,getuser
}