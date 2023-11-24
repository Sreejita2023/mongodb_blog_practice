const Posts=require('../models/Posts')
const Users=require('../models/Users')
exports.createPosts=async(req,res)=>{
      try{
        const{content,authorid}=req.body
        const response=await Posts.create({content,authorid})
        const updatePost=await Users.findByIdAndUpdate(authorid,{$push:{posts:response._id}},{new:true}).populate("posts").exec()
        
        res.status(200).json({
            success:true,
            data:updatePost,
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