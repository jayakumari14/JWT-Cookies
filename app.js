const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("userName", "cookiename");
  res.send("welcome to express");
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening to port on ${PORT}`);
});
