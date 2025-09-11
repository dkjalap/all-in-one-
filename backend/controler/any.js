const any = require("../model/any");
// const {v7: uuid} = require("uuid");
const {setUser,getUser} = require("../service/auth");
const { set } = require("mongoose");
//const { set } = require("mongoose");



async function signupanyhandel(req,res) {

    
      const {name,email,password} = req.body;
      const data = await any.create({name,email,password});
    //   const sessionID = uuid();
  
    // setUser(sessionID,data)
    // res.cookie("terID", sessionID)
     return res.json("data base Create");
}

async function  loginanyhandle(req,res){

    try{

    const {email,password} = req.body;
    
    const result = await any.findOne({email,password});
    console.log(result)
    if(!result)
            {
        return res.status(200).json("email and password worrng")    
            }
        
        // const sessionID = uuid();
        token = setUser(result)
        res.cookie("teriID", token)
           return res.status(201).json({sucess: true , massage: "Login success"})
 
    }
    catch(err){ 
        return res.json("internal server error " ,err)
    }


}


module.exports = {signupanyhandel,loginanyhandle}
