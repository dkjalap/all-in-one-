const mongoose = require("mongoose");

function Dbconection()
{

const uir = "mongodb://localhost:27017"

mongoose.connect(uir)
.then(() => {
    console.log("Coneection Success");
    })
.catch((err) => {

    console.error("Conection Failed To conect "+ err);

});

}
module.exports = Dbconection;