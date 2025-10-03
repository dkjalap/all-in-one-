const jwt = require("jsonwebtoken")
const {User} = require("../model/user")
const key = "Yash";


function setUser(){

  payload = [User.id,User.username]
const token = jwt.sign(payload, key)
  res.cookie("Token", token)
  
    
}

function getUser(token)
{
   return jwt.verify(token,key);
}




 // const skey = "yash";
          // const payload = {};
          // const token = jwt.sign(payload,skey);
          // res.cookie("Token", token)
          // console.log(token)

module.exports = { setUser,getUser}