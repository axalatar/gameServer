const globals = require('../index')
const buildings = require('./enums/buildings')
const empty = buildings.empty

const starterBuildings = [[buildings.factory, buildings.spaceport, buildings.quarry], [empty, empty, empty], [empty, empty, empty]]

module.exports = (playerToken, gameName) => {
// you need to sanitize this data yourself! specifically, you need to sanitize: 
// globals.games[gameName], globals.accounts[playerToken], !globals.games[gameName].players[playerToken]
  
      
    var startPoint = globals.games[gameName].unusedSpots[0];
      
    globals.games[gameName].unusedSpots.shift();
      //gets the first spot in the game's list of open starting spots, and then
      //shifts it down one 
  
    globals.updaters[gameName][playerToken] = {buildings: [[[], [], []], [[], [], []], [[], [], []]], ships: []}  
    globals.games[gameName].players[playerToken] = 
      {
        startPoint: startPoint,
        buildings: starterBuildings,
        movers: []
      }

      
      //actually adds the player to the game

      globals.accounts[playerToken].games.push(gameName)
      //adds the game to the player's account

  return
}
