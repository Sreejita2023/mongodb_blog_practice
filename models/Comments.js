const mongoose=require ('mongoose')
// const Users=require('./Users')
// const Posts=require('./Posts')
const commentSchema=new mongoose.Schema(
   {
   content:{
        type:String,
        required:true,
        maxLength:150,
    },
    authorid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
    },
    postid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Posts",
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
   }
)
module.exports=mongoose.model("Comments",commentSchema)