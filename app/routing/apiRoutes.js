//two routes
//linking routes to the data folder and the friend file
var friendData = require("../data/friends");

//a GET route with the url /api/friends
//display a JSON of all possible friends

app.get("/api/friends", function(req, res) {
    res.json(friendData);
}); 

//a POST route /api/friends
//handle incoming survey results

app.post("/api/friends", function(req, res) {
    
})