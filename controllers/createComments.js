const Comments=require('../models/Comments')

exports.createComments=async(req,res)=>{
      try{
        const{content,authorid,postid}=req.body
        const response=await Comments.create({content,authorid,postid})
        res.status(200).json({
            success:true,
            date:response,
            message:'entry created successfully'
        })
      }
      catch(err){
         console.error(err)
         console.log(err)
         res.status(500)
         .json({
            success:false,
            data:"internal server error",
            message:err.message,
         })
      }
}