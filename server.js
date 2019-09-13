// in this file i will setup our node server and include our routes - Mel

// require the dependencies
const express = require("express");

// setting port to either host's designated port, or 3000!
const PORT = process.env.PORT || 3000;

// initialize our express app
const app = express();

// setup our express router
var router = express.Router();

// set public folder as static
app.use(express.static(__dirname + "/public"));

// pass requests through middleware
app.use(router);

// listen on this port SAMUEL JACKSON!!!
app.listen(PORT, function() {
  console.log("Sam Jackson is listening on port: " +  PORT);
});