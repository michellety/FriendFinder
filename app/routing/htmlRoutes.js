//two routes
//include the path package to get the correct file path for the html
var path = require("path");

//allowing server to have access to this function
module.exports = function(app) {

//a GET route /survey, display the survey page at survey.html
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

//default, displays the home page at home.html
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

}