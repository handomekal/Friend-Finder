// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");
//var surveyData = require("../data/surveyData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

//   app.get("/api/surveylist", function(req, res) {
//     res.json(surveyData);
//   });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
     if (friendsData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
     }
     else {
      surveyData.push(req.body);
       res.json(false);
     }
   });
// var newFriend = {
//     name: req.body.name,
//     photo: req.body.photo,
//     scores: []
// };
// var scoresArray = [];
// for(var i = 0; i < req.body.scores.length; length, i++) {
//     scoresArray.push(parseInt(req.body.scores[i]))
// }
// newFriend.scores = scoresArray;

// var scoreComparisionArray = [];
//     for(var i=0; i < friendsData.length; i++){

//       // Check each friend's scores and sum difference in points
//       var currentComparison = 0;
//       for(var j=0; j < newFriend.scores.length; j++){
//         currentComparison += Math.abs( newFriend.scores[j] - friendsData[i].scores[j] );
//       };
      //{scoreComparisionArray.push(currentComparison)};
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = 0;
    surveyData.length = 0;

    res.json({ ok: true });
  });

};
