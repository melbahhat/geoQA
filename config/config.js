const mongoose=require('mongoose')
const mongooseCredentials = {
    url: 'mongodb+srv://test:tkbEJBU0C0LoPUuc@cluster0.p4kjy.mongodb.net/geoQA_DB?retryWrites=true&w=majority'
}

const conDB=async()=>{


 try{
mongoose.connect(mongooseCredentials.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  },()=>{


    console.log("connected")
  })

}
 

catch(e){

console.log('error'+e)

}

}
module.exports=conDB