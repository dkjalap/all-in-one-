const sessionIDMap = new Map();

function setUser(id,user){
    sessionIDMap.set(id,user);
    console.log(sessionIDMap)
}


function getUser(id)
{
    sessionIDMap.get(id);
}



module.exports = { setUser,getUser}