// in this file i will setup our node server and include our routes - Mel

// require the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");
const mongoose = require("mongoose");

// setting port to either host's designated port, or 3000!
const PORT = process.env.PORT || 3000;

// initialize our express app
const app = express();

// setup our express router
var router = express.Router();

// set public folder as static
app.use(express.static(__dirname + "/public"));

// handlebars connection to app
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// setup body parser
app.use(bodyParser.urlencoded({
  extended: false
}));

// pass requests through middleware
app.use(router);

// direct the app to use the deployed database otherwise use local mongoHeadlines database
const db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// mongoos' connection to database
mongoose.connect(db, function(error){
  if(error) {
    console.log(error);
  }
  else {
    console.log("sam jackson mongoose conek is successful!");
  }
});

// listen on this port SAMUEL JACKSON!!!
app.listen(PORT, function() {
  console.log("Sam Jackson is listening on port: " +  PORT);
});