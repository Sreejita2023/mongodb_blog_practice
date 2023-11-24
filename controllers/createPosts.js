const Posts=require('../models/Posts')

exports.createPosts=async(req,res)=>{
      try{
        const{content,authorid}=req.body
        const response=await Posts.create({content,authorid})
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