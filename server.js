const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");
const app = express();


const url = require('url');

 
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.set('ManiRoute', ""); 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.header("Access-Control-Allow-Headers", "x-requested-with, Content-Type, origin, authorization, accept, client-security-token");
  
  // var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
  // app.set('mdaRoute', pathname); 
  // console.log('http://'   + pathname);
  next();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to HTML-IMAGE-PDF." });
});

require("./app/routes/main.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 2884;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
