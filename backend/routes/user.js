const express = require("express");
const router = express.Router();
const {handelUserSignup,handelUserInfo, handelUserLogin} = require("../controler/user");


    router.post("/api/signup",handelUserSignup )
    router.post("/api/login", handelUserLogin)
    router.get("/api/all_user", handelUserInfo )



    module.exports = router;



