const  mongoose  = require("mongoose")

const dbconnection=async(path)=>{
    return await mongoose.connect(path)
}

module.exports=dbconnection