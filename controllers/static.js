
const url = require('../models/urlSchema.js')


const handlerenderhome=async(req,res)=>{
  const user=req.user
  const allurls= await url.find({createdby:user._id})
  if(allurls)
   return  res.render('home',{allurls})
   return  res.render('home',)
  
}
const handlerenderSignin=(req,res)=>{
    return  res.render('signin')
}
const handlerenderSignup=(req,res)=>{
    return  res.render('signup')
}

module.exports={
  handlerenderhome,
  handlerenderSignin,
  handlerenderSignup
}