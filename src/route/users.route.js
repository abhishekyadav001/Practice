const express = require("express");
const { getAllUsers, addUsers } = require("../controller/user.controller");
const userRoute = express.Router();

userRoute.route("/getallusers").get(getAllUsers);
userRoute.route("/postuser").post(addUsers);
module.exports = userRoute;
