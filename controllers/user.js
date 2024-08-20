const { setuser } = require("../auth");
const url = require("../models/urlSchema");
const user = require("../models/userSchema")
const handleSigninuser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.render('signin', { message: "Please insert valid credentials" });
      }
  
      const result = await user.findOne({ email, password });
      console.log(result)
      if (result) {
        const object={
            _id:result._id,
            name: result.name,
            email: result.email

        }
        const token = await setuser(object);
        res.cookie('uid', token);
        const allurls= await url.find({createdby:result._id})
        if(allurls)
         return  res.render('home',{allurls})
        return res.render('home');
      } else {
        return res.redirect('/signin');
      }
    } catch (error) {
      console.log("Error during sign-in:", error);
       res.render('signin', { message: "An error occurred. Please try again." });
    }
  };

 const handleSignupuser=async(req,res)=>{
    try {
        const userdata=req.body
        if(!userdata.name||!userdata.email||!userdata.password) 
            return res.render('signup',{message:"Plz insert valid credentials"})
        const result=await user.create({
            name:userdata.name,
            email:userdata.email,
            password:userdata.password
        })
        if(result){
            return  res.render('signin')
        }

    } catch (error) {
        console.log(error)
        return  res.render('signup')
    }
    
 }
 const handleuserlogout=async(req,res)=>{
  await res.cookie('uid', '', { expires: new Date(0), httpOnly: true });
  return res.redirect('/signin');
 }
module.exports={
handleSignupuser,
handleSigninuser,
handleuserlogout
 }