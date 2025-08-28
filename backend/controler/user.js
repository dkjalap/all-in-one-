const User = require("../model/user");

async function handelUserSignup(req,res)
{
    
       const {name,lastname,username,email,password,confromPassword,mobile_Number} = req.body;
       console.log(req.body)
       if(password.length < 8){return res.status(400).json("Pssword lenth minmum 8 char..")}
       const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        if(!strongPasswordRegex.test(password))
            {
                return res.status(400).json("create Strong password upper,lower,number,spical char use in password")
            }
       if(password != confromPassword){
        return res.status(400).json({error: "password and confrome password not match !"});
       }
            

       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json( "Invalid email format" );
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
     return res.status(201).json("data Base Create Successfully");
   
console.log(result);

    }
    

 async function handelUserInfo(req,res) {
    const data = await User.find({});
    return res.status(200).json(data)   
 }   
 

 async function handelUserLogin(req,res){
   const {email,password} = req.body;
   console.log(req.body); 
     const data = await User.findOne({email,password});
     return res.render("/api/all_user", data)
    //     //console.log(data)
    }
    
 



module.exports = {
    handelUserSignup,
    handelUserInfo,
    handelUserLogin,
}