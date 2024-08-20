const express=require('express')
const { handleSignupuser, handleSigninuser, handleuserlogout } = require('../controllers/user')

const userrouter=express.Router()

userrouter.post('/signup',handleSignupuser)
userrouter.post('/signin',handleSigninuser)
userrouter.post('/logout',handleuserlogout)

module.exports=userrouter