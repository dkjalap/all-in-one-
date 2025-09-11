const jwt = require("jsonwebtoken")
const key = "Yash";


function setUser(payload){
const re = jwt.sign(payload, key)
  return re
  console.log(re)
    
}


function getUser(token)
{
   return jwt.verify(token,key);
}



module.exports = { setUser,getUser}