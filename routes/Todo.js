const express=require("express")
const router=express.Router()
const {createUsers} =require('../controllers/createUsers')
const {createPosts}=require('../controllers/createPosts')
const {createComments}=require('../controllers/createComments')
const {createLikes}=require('../controllers/createLikes')
router.post('/createUsers',createUsers)
router.post('/createPosts',createPosts)
router.post('/createComments',createComments)
router.post('/createLikes',createLikes)
module.exports=router