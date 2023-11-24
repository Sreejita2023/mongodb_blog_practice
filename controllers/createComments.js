const Comments=require('../models/Comments')
const Posts=require('../models/Posts')
const Users=require('../models/Users')
exports.createComments=async(req,res)=>{
      try{
        const{content,authorid,postid}=req.body
        const response=await Comments.create({content,authorid,postid})
      //   new is used to update the old values or array of posts
        const updatePost=await Posts.findByIdAndUpdate(postid,{$push:{comments:response._id}},{new:true}).populate("comments").exec()
        const updateUser=await Users.findByIdAndUpdate(authorid,{$push:{comments:response._id}},{new:true}).populate("comments").exec()
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