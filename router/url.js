const express=require('express')
const { handleGetUrl, handlepostUrl, handledeleteUrl } = require('../controllers/url')
const authentication = require('../middleware/auth')

const urlrouter=express.Router()

urlrouter.get('/:id',handleGetUrl)
urlrouter.post('/delete',authentication,handledeleteUrl)
urlrouter.post('/',authentication,handlepostUrl)

module.exports=urlrouter