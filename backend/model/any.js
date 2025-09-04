const mongooes = require("mongoose");

const AnySchema = new mongooes.Schema({
    name:{type:String,Required:true},
    email:{type:String,Required:true},
    password:{type:String,Required:true}
},{timestamps: true});


const any = mongooes.model('Anys', AnySchema);

module.exports = any;

