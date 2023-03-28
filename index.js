var express = require("express");
var app = express();
 

module.exports = {accounts: {}, games: {}} 
//the global variables


/* format
{
generalToken:  {
  name: string
  password: string
  games: [names of the games the player has joined]
  }
}
*/

/* format 
name: {
password: string
startTime: (time the game started)
movers: {
        moverID: {
          engine: string defining what type of engine is on the rocket, changes the speed of the rocket and lowers distance
          body: same as engine, but increases distance and lowers speed
          cone: increases speed, increases distance
          payload: the important thing, completely variable per payload item. most of them increase damage on target
          targetPos: x and y position of landing place
          startPos: x and y position of launch position
          launchTime: unix timestamp of launch
          landTime: estimated unix timestamp of landing 
          speed: calculated speed based on parts (gettable)
          direction: direction, in degrees, that the 
 object is moving in (gettable)
          }
        }
players: {(player's general token): {
          startPoint: top left corner of the player's 4x4 plot of the 100x100 game area
          buildings: [][] 3x3 array of strings, with each string representing a different building in the player's plot
          movers: [] list of all mover ids of movers the player controls 
         }}
      (((   distanceTravelled: the distance the object has travelled (gettable)
                  distanceToTravel: the distance the object needs to travel to reach its target (gettable) ))) make functions to get both of these
}
*/




app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.status(200).send("What an interesting blank page...");
  });

const gameRoute = require('./routes/game.js');
const accountRoute = require('./routes/account.js');


app.use('/game', gameRoute);
app.use('/account', accountRoute);

app.use((req, res) => { 
  //if you don't go to either of the above routes,
  //you go to the 404 page
  res.status(404).send("How did you get here?")
})

app.use((err, req, res, next) => { 
  //if something breaks, this gets called
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


var server = app.listen(4000, function () {
    console.log("app running on port.", server.address().port);
    
});