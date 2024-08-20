const { Schema } = require("mongoose")
const  generateShortId  = require("ssid")
const url = require("../models/urlSchema")

const handleGetUrl=async(req,res)=>{
    const data=req.params.id
    const searchurl=await url.findOneAndUpdate({
        shortid:data
    },{
        $push:{
            visits:[
                {
                    timestamps:new Date()
                }
            ]
        }
    })
    if(searchurl){
        return res.redirect(searchurl.redirecturl)
    }
    return  res.render('home')
 }
 const handlepostUrl=async(req,res)=>{
    try {
    const data=req.body
    const user=req.user
    const shortid = generateShortId(8);
    const findduplicate=await url.findOne({redirecturl:data.url,createdby:user._id})
    
    if(findduplicate){
        console.log(findduplicate)
        const allurls= await url.find({createdby:user._id})
        if(allurls)
         return  res.render('home',{allurls,message:"plz try again no duplicate link"})
        return res.render('home');
    }else{
        const result=await url.create({
            shortid:shortid,
            redirecturl:data.url,
            visits:[],
            createdby:req.user._id
        })
        const allurls= await url.find({createdby:user._id})
        if(allurls)
         return  res.render('home',{allurls,shortid})
        return res.render('home');
    }
   
 
   
    } catch (error) {
        console.error(error)
    }
 }
 
 const handledeleteUrl=async(req,res)=>{
       const shortid=req.body.shortid;
       const user=req.user
       const result=await url.findOneAndDelete({shortid:shortid})
        const allurls= await url.find({createdby:user._id})
         return  res.render('home',{allurls,message:"plz try again no duplicate link"})
       
 }

 module.exports={
    handleGetUrl,
    handlepostUrl,
    handledeleteUrl
 }