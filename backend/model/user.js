const mongooes = require("mongoose");

const userSchema = new mongooes.Schema({
    name:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        
    } ,
    username:{
        type: String,
        required: true,
       
    } ,
    email:{
        type: String,
        required: true,
        
    },
    password:{
        type: String,
        required: true,
       
    
    },
    confromPassword:{
        type: String,
        required: true,

    },
    mobile_Number:{
        type: String,
        required: true,
            
    }
}, {timestamps: true});

const User = mongooes.model('user', userSchema);
module.exports = User;