import mongoose from 'mongoose';
const Schema=mongoose.Schema


let ReplySchema=new Schema({
 
comment:{
    type:String,
    index: true,
   trim: true

},
timestamps: 
  { createdAt: "createdAt"
  , updatedAt: "updatedAt" },

  post: { type: Schema.Types.ObjectId, ref: 'Post' }

})

module.exports=mongoose.model('Replies',ReplySchema)