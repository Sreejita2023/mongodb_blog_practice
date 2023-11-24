const mongoose=require ('mongoose')
const userSchema=new mongoose.Schema(
   {
   id:{
        type:String,
        required:true,
        maxLength:50,
    },
   username:{
        type:String,
        required:true,
        maxLength:50,
    },
    password:{
        type:String,
        required:true,
        maxLength:50
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
   }
)
module.exports=mongoose.model("Users",userSchema)