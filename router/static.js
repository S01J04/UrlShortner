const express=require('express')
const { handlerenderhome, handlerenderSignin, handlerenderSignup } = require('../controllers/static')
const authentication = require('../middleware/auth')

const staticrouter=express.Router()

staticrouter.get('/home',authentication,handlerenderhome)
staticrouter.get('/signin',handlerenderSignin)
staticrouter.get('/signup',handlerenderSignup)

module.exports=staticrouter