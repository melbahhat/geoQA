const mongoose = require('mongoose');
const Schema=mongoose.Schema


let PostSchema=new Schema({

title:{
    type:String,
    trim: true
},

content:{
    type:String,
    index: true,
   trim: true

},

lat:{
    type:Number
},
lat:{
    type:Number
},

 
 
 
   createdAt:{ type:Date},
    updatedAt:{ type:Date},

  user: { type: Schema.Types.ObjectId, ref: 'User' },
  replies:{ type: Schema.Types.ObjectId, ref: 'Replies' }

})

module.exports=mongoose.model('Posts',PostSchema)