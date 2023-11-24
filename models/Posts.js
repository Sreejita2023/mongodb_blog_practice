// import mongoose
const mongoose=require ('mongoose')

// route handler
const postSchema=new mongoose.Schema(
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
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Likes",
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments",
    }],
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
   }
)
module.exports=mongoose.model("Posts",postSchema)