const mongoose=require ('mongoose')
const Users=require('./Users')
const postSchema=new mongoose.Schema(
   {
   content:{
        type:String,
        required:true,
        maxLength:150,
    },
    authorid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:Users,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
   }
)
module.exports=mongoose.model("Posts",postSchema)