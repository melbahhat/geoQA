const posts= require( '../Controllers/posts.controllers')
const auth= require( '../middlewares/auth.middleware')

const express =require('express')
const router=express.Router()

router
.post('/',(req,res)=>{

posts.create(req,res);

}) 
module.exports=router