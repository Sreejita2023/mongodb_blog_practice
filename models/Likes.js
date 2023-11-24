const mongoose=require ('mongoose')

const likeSchema=new mongoose.Schema(
   {
   content:{
        type:String,
        required:false,
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
module.exports=mongoose.model("Likes",likeSchema)