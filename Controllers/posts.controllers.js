const Post = require("../models/Post.model");
const jwt = require("jsonwebtoken");
var geoip = require('geoip-lite');
 
exports.create=async(req,res)=>{


     
  let ip=  req.ip   
  ip = ip.toString().replace('::ffff:', '');
  var geo = geoip.lookup(ip);
console.log(geo)
  
   


var post={
title:req.body?.title,
content:req.body?.content
}


try{




}

catch(e){




}



}