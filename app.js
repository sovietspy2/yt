var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var person = [
  {
    name: "jerry",
    age: 12
  }
];

app.get("/", (req, res) => {
  res.json(person);
  console.log("Something happend");
});

app.listen(80, () => {
  console.log("Serer started on port 80");
});
