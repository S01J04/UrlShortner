const { default: mongoose } = require("mongoose");

const urlSchema=mongoose.Schema({
    shortid:{
        type:String,
        required:true
    },
    redirecturl:{
        type:String,
        required:true,
    },
    visits:[
        {
            timestamps:Date
        }
    ]
    ,
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
}
    ,{timestamps:true})

    const url=mongoose.model('url',urlSchema)
    module.exports=url