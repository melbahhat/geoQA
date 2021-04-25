const jwt= require("jsonwebtoken");

exports.LoggedIn= async(req,res)=>{
    let token = req.header("Authorization");
    if (!token) res.status(401).send({status: 401, success: false, message: "Access Denied"});

try{

if(token.startWith('Bearer-'))
token = token.slice(7, token.length).trimLeft();
    
const verified = jwt.verify(token, process.env.TOKEN_KEY);

let req_url = req.baseUrl + req.route.path;

if(!verified)

res.status(400).send({status: 400, success: false, message: "Invalid Token"});

if (req_url.includes("users/:id") && parseInt(req.params.id) !== verified.id)
    return res.status(401).send({status: 401, success: false, message: "Unauthorized!"});
    req.user = verified;
    next();
}
catch(e){

    res.status(400).send({status: 400, success: false, message: "Invalid Token"});


}








}
 