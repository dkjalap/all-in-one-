const {getUser} = require("../service/auth")

function protectRoute(req,res,next){
    const uuid = req.cookies.teriID;
    console.log(req.cookies.teriID)
    if(!uuid){ return null;}
    const user = getUser(uuid);
    if(!user){return null;}
    req.user = user
    next();
}


module.exports = {protectRoute,}