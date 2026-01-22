const express = require("express");
const userCtrl = require("../controllers/userController");

const route = express.Router();

route.post("/sign-up", userCtrl.signUpNewUser);
route.post("/sign-in", userCtrl.signInWithEmail);

module.exports = route;