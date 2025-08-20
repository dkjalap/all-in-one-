const mongooes = require("mongoose");

const userSchema = new mongooes.Schema({
    Task: String,
    date: Date,
    OrgName: String,
    Name: String
});


module.exports = mongooes.model("User",userSchema);