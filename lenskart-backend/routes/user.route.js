const express = require("express");
const { signup, login } = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.post("/signup", signup);
userRoute.post("/login", login);

userRoute.get("/test-cookie", (req, res) => {
  console.log("Cookies received:", req.cookies);
  res.json({ message: "Checking cookies...", cookies: req.cookies });
});

module.exports = userRoute;
