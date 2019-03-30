//two routes
//linking routes to the data folder and the friend file
var friendData = require("../data/friends");

//a GET route with the url /api/friends
//display a JSON of all possible friends

module.exports = function (app) {
    //gets data from friends.js
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //a POST route /api/friends
    //handle incoming survey results

    app.post("/api/friends", function (req, res) {
        //save the scores
        var userScore = req.body;
        var newUser = {
            name: userScore.name,
            photo: userScore.photo,
            scores: []
        };
        console.log("new friend data from user", newUser);

        //change the scores into integers, then save to the newUser 
        var scoreArr = [];
        for (var i = 0; i < userScore.length; i++) {
            scoreArr.push(parseInt(userScore[i]))
        }
        newUser.scores = scoreArr;

        //comparison loops here
        //Math.abs shows absolute value 
        //array to hold the comparison score
        var comparisonArr = [];
        //compare to friend entries 
        for (var i = 0; i < friendData.length; i++) {
            var diff = 0;
            for (var j = 0; j < newUser.scores.length; j++) {
                diff += Math.abs(newUser.scores[j] - friendData[i].scores[j]);
            }
            //add the comparison differences into the array
            comparisonArr.push(diff);
        }

        //determine the closest match
        var bf = 0;
        for (var i = 1; i < comparisonArr.length; i++) {
            //lowest number is the closest match
            if (comparisonArr[i] <= comparisonArr[bf]) {
                bf = i;
            }
        }
        console.log("best friend match", bf);
        var match = {};
        match = friendData[bf];
        //response with the index of the best match

        //add user to the friendData array
        friendData.push(newUser);
        console.log("user data saved");
        res.json(match);
    })

}


