const addItem = require('./helpers/addItem')

var express = require("express");
var app = express();
var AsyncLock = require('async-lock');
var lock = new AsyncLock();


var locked = false

globals = { accounts: {}, games: {}, updaters: {} }
module.exports = globals
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


function update() {
  lock.acquire('locked', function(done) {
    for (games in globals.updaters) {
      for (accounts in globals.updaters[games]) {
        for (buildings in globals.updaters[games][accounts].buildings) {
          for (Ypos in globals.updaters[games][accounts].buildings[buildings]) {
            for (Xpos in globals.updaters[games][accounts].buildings[buildings][Ypos]) {
              actualBuilding = globals.updaters[games][accounts].buildings[buildings][Ypos][Xpos]
              console.log("Building: ", actualBuilding)
              // if (actualBuilding.type != 'mine') {
              //   continue
              // }
              // if (actualBuilding.cooldown <= 0) {
              // ...
              // } else { 
              // }
              if (actualBuilding.type == 'mine') {
                if (actualBuilding.cooldown <= 0) {
                  addItem(globals.updaters[games][accounts], globals.updaters[games], Xpos, globals.updaters[games][accounts].buildings[buildings][globals.updaters[games][accounts].buildings[buildings][Ypos][Xpos]], 0, 1, 'resource')
                  actualBuilding.cooldown = 5
                }
                else {
                  Xpos.cooldown--
                }
              }
            }
          }
        }
      }
    }
    done();
  })
}

const updateInterval = setInterval(update, 1000)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => lock.acquire('locked', function(done) {
  next()
  done()
}))

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
  // console.error("***** ERROR START *****", err)
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


var server = app.listen(4000, function() {
  console.log("app running on port.", server.address().port);

});