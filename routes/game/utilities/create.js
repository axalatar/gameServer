const globals = require('../../../index')
const joinGame = require('../../../helpers/joinGame')
const checkLength = require('../../../helpers/checkLength')


module.exports = (req, res) => {
  //creates a game, takes in a name (name of the game) and password (password of the game)
  //it also needs a player token, just like everything else in the game subdomain
  
  if(!req.body.password || typeof req.body.password != "string" || !checkLength(req.body.password, 5, 20)) {
    res.status(400).send("String 'password' field required, must be 5-20 characters")
  }

  
  if(req.body.name in globals.games) {
    res.status(400).send("A game with the given name already exists")
    return;
  }

  
  var spots = [[50, 10], [10, 50], [50, 90], [90, 50]];
  //the spots which player's planets will spawn at when joining the game.
  //the list is shuffled, and then when someone joins they get the first
  //index in the list

  
  for (let i = 0; i < 4; i++) {
    const j = Math.floor(Math.random() * (i + 1));
      
    [spots[i], spots[j]] = [spots[j], spots[i]];
  }
  
  globals.games[req.body.name] = {
    password: req.body.password,
    startTime: Date.now(),
    movers: {},
    unusedSpots: spots,
    players: {}
  }

  globals.updaters[req.body.name] = {}

  joinGame(req.headers.token, req.body.name)

  
  res.status(200).send("Game succesfully created")
}