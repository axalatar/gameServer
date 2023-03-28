const globals = require('../index')
const checkFull = require('./checkFullNumber')
const buildings = require('./enums/buildings')
const items = require('./enums/items')
const checkLength = require('./checkLength')

module.exports = (playerToken, gameName, posX, posY, inventoryIndex, amountRemove) => {
  // you need to sanitize this data yourself! specifically, sanitize:
  //
  // globals.games[gameName], globals.accounts[playerToken], globals.games[gameName].players[playerToken],
  // checkFull(posX), checkFull(posY), checkFull(inventoryIndex), checkFull(amountRemove),
  // checkLength(posX, 0, 2), checkLength(posY, 0, 2), building.id != buildings.empty.id,
  // checkLength(inventoryIndex, 0, building.inventory.length - 1), inventoryItem.item != items.empty


      var building = globals.games[gameName].players[playerToken].buildings[posY][posX]
            
      var inventoryItem = building.inventory[inventoryIndex]
                
      if(inventoryItem.amount > amountRemove) {
        inventoryItem.amount -= amountRemove
      }
                    
  
      else {
        inventoryItem.item = items.empty
        inventoryItem.amount = 0
      }
      
        globals.games[gameName].players[playerToken].buildings[posY][posX].inventory[inventoryIndex] = inventoryItem

  return
}
  
