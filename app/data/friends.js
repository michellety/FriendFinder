//saves the application's data as an array of objects 

var friendArray = [
    {
        name: "Chelsea",
        photo: "app/public/images/gator.jpeg",
        scores: [5, 4, 5, 1, 2, 3, 1, 4, 5, 2]
    },
    {
        name: "Bryan",
        photo: "app/public/images/crab.jpg",
        scores: [1, 1, 1, 2, 5, 4, 2, 3, 4, 2]
    },
    {
        name: "Jason",
        photo: "app/public/images/zeb.jpeg",
        scores: [4, 3, 3, 2, 5, 1, 5, 3, 4, 5]
    }
]


//export the array 
module.exports = friendArray;