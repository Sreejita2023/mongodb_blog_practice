const Likes=require('../models/Likes')
const Posts=require('../models/Posts')
const Users=require('../models/Users')
exports.createLikes=async(req,res)=>{
      try{
        const{content,authorid,postid}=req.body
        const response=await Likes.create({content,authorid,postid})
        const updatePost=await Posts.findByIdAndUpdate(postid,{$push:{likes:response._id}},{new:true}).populate("likes").exec()
        const updateUser=await Users.findByIdAndUpdate(authorid,{$push:{likes:response._id}},{new:true}).populate("likes").exec()
        res.status(200).json({
            success:true,
            userdata:updateUser,
            postdata:updatePost,
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

exports.disLikes=async(req,res)=>{
      try{
        const{content,authorid,postid}=req.body
        const response=await Likes.findOneAndDelete({_id:content,authorid,postid})
        
        const updatePost=await Posts.findByIdAndUpdate(postid,{$pull:{likes:response._id}},{new:true}).populate("likes").exec()
        const updateUser=await Users.findByIdAndUpdate(authorid,{$pull:{likes:response._id}},{new:true}).populate("likes").exec()
        res.status(200).json({
            success:true,
            userdata:updateUser,
            postdata:updatePost,
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