const globals = require('../index')
const checkFull = require('./checkFullNumber')
const buildings = require('./enums/buildings')
const items = require('./enums/items')
const checkLength = require('./checkLength')

module.exports = (playerToken, gameName, posX, posY, inventoryIndex, amountAdd, itemID) => {
  //this function does not sanitize data! do it before calling it.
  //required to be all be true: 
  //globals.games[gameName], globals.accounts[playerToken], globals.games[gameName].players[playerToken],
  //checkFull(posX), checkFull(posY), checkFull(inventoryIndex), checkFull(amountAdd), checkLength(posX, 0, 2),
  //checkLength(posY, 0, 2), building.id != buildings.empty.id, inventoryItem.item == items.empty,
  //checkLength(inventoryIndex, 0, building.inventory.length - 1), items[itemID],
  //inventoryItem.item == itemID

      
      var building = globals.games[gameName].players[playerToken].buildings[posY][posX]
            
      var inventoryItem = building.inventory[inventoryIndex]
                
  
      if(inventoryItem.item == items.empty) {
        inventoryItem.amount = amountAdd
        inventoryItem.item = itemID          
      }
                    
    
      else if(inventoryItem.item == itemID) {         
        inventoryItem.amount += amountAdd           
      }

      
        globals.games[gameName].players[playerToken].buildings[posY][posX].inventory[inventoryIndex] = inventoryItem
  return
}
