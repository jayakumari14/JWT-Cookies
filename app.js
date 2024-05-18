const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(jwt());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening to port on ${PORT}`);
});
