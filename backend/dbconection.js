const mongoose = require("mongoose");

function Dbconection()
{

const dbUrl = "mongodb://localhost:27017/all-in-one"

mongoose.connect(dbUrl)
.then(() => {
    console.log("Coneection Success");
    })
.catch((err) => {

    console.error("Conection Failed To conect "+ err);

});

}
module.exports = Dbconection;