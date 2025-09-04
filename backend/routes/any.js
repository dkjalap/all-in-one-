const express = require("express");
const Router = express.Router();
const {signupanyhandel,loginanyhandle} = require("../controler/any")

Router.post("/api/any/signup",signupanyhandel)
Router.post("/api/any/login", loginanyhandle)


module.exports = Router;
