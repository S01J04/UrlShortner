const express=require("express")
const urlrouter = require("./router/url")
const userrouter = require("./router/user")
const staticrouter = require("./router/static")
const cookieParser = require("cookie-parser")
const dbconnection = require("./config/db")
const path=require('path')


const app=express()

// DB connection
 dbconnection("mongodb://127.0.0.1:27017/miniproject")
 .then(()=>console.log("Database connected"))
 .catch((err)=>console.error(err))

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())


//View Engine
app.set("views", path.resolve('./views'))
app.set('view engine', 'ejs')



//Routes
app.use('/url',urlrouter)
app.use('/user',userrouter)
app.use('/',staticrouter)

//Listners
app.listen(3000,()=>{
    console.log("listening at PORT 3000")  
})