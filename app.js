var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var logger = function(req, res, next) {
  console.log("Logged");
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.listen(80, () => {
  console.log("Serer started on port 80");
});
