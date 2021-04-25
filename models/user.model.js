const mongoose =require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
 
const Schema=mongoose.Schema

let userSchema= new Schema({

name:{
    type:String,
    required:true,
    trim: true
},

email:{
    type:String,
    index: true,
    unique:true,
    trim: true,
     validate:value=>{

        if(!validator.isEmail(value))
        {
              throw new Error({error: 'Invalid Email address'})
        }
      

     }


},

password:{
    type:String,
    minLength: 7,
    trim:false
},
isActive: {
    type: Boolean,
    default: true,
    required: true,
  },
   createdAt:{ type:Date},
    updatedAt:{ type:Date},

    posts: { type: Schema.Types.ObjectId, ref: 'Posts' }

})

module.exports= mongoose.model('Users',userSchema)