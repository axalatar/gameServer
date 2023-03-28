const globals = require('../../../index')
const joinGame = require('../../../helpers/joinGame')


module.exports = (req, res) => {
  //joins a game, takes in a name (name of the game to join) and password (password of the game)
  //it also needs a player token, just like everything else in the game subdomain
  
  if(!(req.body.name in globals.games)) {
    res.status(400).send("A game with the given name does not exist");
    return;
  }


  if(globals.games[req.body.name].password != req.body.password) {
    res.status(400).send("Incorrect password")
    return
  } 

  
  if(joinGame(req.headers.token, req.body.name) != true) {
    res.status(400).send("You have already joined this game")
    return
  }

  
  res.status(200).send("Game succesfully joined")
}