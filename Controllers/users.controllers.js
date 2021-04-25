const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  var user = {
    name: req.body?.name || null,
    email: req.body?.email || null,
    password: req.body?.password || null,
  };
  var result = {};

  try {
    let existedUser = await User.find({ email: user.email });

    if (existedUser.length > 0) {
 

      result = {
        message: "existed User",
        status: 400,
        success: false,
        redirect:process.env.URL+'/users/signIn'
      };
    } else {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);

      let createdUser = await User.create(user);
      let token = jwt.sign(
        {
          id: createdUser.id,
        },
        process.env.TOKEN_KEY,

        { expiresIn: 3600 }
      );

      result = {
        message: "user created successfully",
        status: 201,
        success: true,
        token:token
      };
    }
  } catch (e) {
    result = {
      message: "error has occured " + e,
      status: 500,
      success: false,
    };
  }

  res.status(result.status).send(result);
};
exports.signIn= async (req, res) => {
    var user = {
      email: req.body?.email || null,
      password: req.body?.password || null,
    };
    var result = {};
  
    try {
      let existedUser = await User.findOne({ email: user.email });
  
      if (existedUser.length) {
        result = {
          message: "User doesnt exist",
          status: 400,
          success: false,
          redirect:process.env.URL+'/users/signUp'
        };
      } else {


 
    
        const isMatch = await bcrypt.compare(user.password, existedUser.password);

        if(isMatch){

  
       
        let token = jwt.sign(
          {
            id: existedUser.id,
          },
          process.env.TOKEN_KEY,
  
          { expiresIn: 3600 }
        );
  
        result = {
          message: "user created successfully",
          status: 201,
          success: true,
          token:token
        };
      }

      else{
        result = {
            message:  "Incorrect Password !",
            status: 201,
            success: true,
            token:token
          };



      }
    }
    } catch (e) {
      result = {
        message: "error has occured " + e,
        status: 500,
        success: false,
      };
    }
  
    res.status(result.status).send(result);
  };
  