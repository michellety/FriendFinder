//require the nmp packages express and path
var express = require("express");
var path = require("path");

//create the express app instance
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//access to css style sheet 
app.use(express.static("app/public"));

//directs the server to the route files in the routing folder 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener to start the server 
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
