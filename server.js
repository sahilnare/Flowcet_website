const express = require("express");
const ejs = require("ejs");
const path = require("path");
const parser = require('body-parser');
const app = express();
app.use(parser.urlencoded({
  extended: false
}));
app.use(parser.json());
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "views")));

app.use('/', require('./routes/api'));

app.listen(5000, () => console.log(`Listening on port 5000...`));