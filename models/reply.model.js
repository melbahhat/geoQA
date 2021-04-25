import mongoose from 'mongoose';
const Schema=mongoose.Schema


let LikedSchema=new Schema({
 

  post: { type: Schema.Types.ObjectId, ref: 'Post' },
  reply: { type: Schema.Types.ObjectId, ref: 'reply' },
  status:{
      type:Boolean
  },

  createdAt:{ type:Date},
  updatedAt:{ type:Date},
})

module.exports=mongoose.model('Likes',LikedSchema)