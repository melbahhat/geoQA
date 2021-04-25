const users= require( '../Controllers/users.controllers')
const auth= require( '../middlewares/auth.middleware')

const express =require('express')
const router=express.Router()

router
.post('/signUp',(req,res)=>{

users.signUp(req,res);

})


.post('/signIn',(req,res)=>{

    users.signIn(req,res);
    
    })

    
.get('/test',auth.LoggedIn,(req,res)=>{

console.log(req.user)    
    })
 
module.exports=router