const Users=require('../models/Users')

exports.createUsers=async(req,res)=>{
      try{
        const{username,password}=req.body
        const response=await Users.create({username,password})
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