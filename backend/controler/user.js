const jwt = require("jsonwebtoken");
const { json } = require("express");
const User = require("../model/user");
// const {auth} = require("../service/auth");


async function handelUserSignup(req,res)
{
    
       const {name,lastname,username,email,password,confromPassword,mobile_Number} = req.body;
       console.log(req.body)
       if(password.length < 8){return res.status(400).json({pssworderror:"Pssword lenth minmum 8 char.."})}
       const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        if(!strongPasswordRegex.test(password))
            {
                return res.status(400).json({error:"create Strong password upper,lower,number,spical char use in password"})
            }
       if(password != confromPassword){
        return res.status(400).json({error: "password and confrome password not match !"});
       }
            

       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({emailerror: "Invalid email format" });
    }

    console.log(req);
     const result = await User.create({
        name,
        lastname,
        username,
        email,
        password,
        confromPassword,
        mobile_Number
    
    })
     return res.status(201).json({success:"data Base Create Successfully"});
   
console.log(result);

    }
    

 async function handelUserInfo(req,res) {
    const data = await User.find({});
    return res.status(200).json(data)   
 }   
 

 async function handelUserLogin(req,res){

  try {
   
   
     const {email,password} = req.body; 
     
          const data = await User.findOne({email:email,password:password})
          console.log(data)
          if(!data){
          return res.status(900).json({error:"user and password wrong"})      
          }
          // const skey = "yash";
          // const payload = {};
          // const token = jwt.sign(payload,skey);
          // res.cookie("Token", token)
          // console.log(token)
          return res.status(200).json({success: true , massage: "Login Success" });
          
  }
    
    catch(error)
    {
     return ("error")
    } 
  }
    
 



module.exports = {
    handelUserSignup,
    handelUserInfo,
    handelUserLogin,
}