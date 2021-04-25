const express = require("express");
const cors = require("cors");
require('dotenv').config()
const conDB = require("./config/config");
conDB();

const app = express();
const userRouter =require('./routes/users');
const postRouter =require('./routes/posts');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use('/users',userRouter)
app.use('/posts',postRouter)
 const PORT = process.env.PORT;

app.listen("0.0.0.0",PORT, () => {
  

  console.log(`Server is running on port ${PORT}.`);
});