const globals = require('../../../index')
const checkFull = require('../../../helpers/checkFullNumber')
const addItem = require('../../../helpers/addItem')
const removeItem = require('../../../helpers/removeItem')
const buildings = require('../../../helpers/enums/buildings')
const items = require('../../../helpers/enums/items')
const checkLength = require('../../../helpers/checkLength')

module.exports = (req, res) => {

  toBuilding = globals.games[req.body.name].players[req.headers.token].buildings[req.body.ypos][req.body.xpos]
  fromBuilding = globals.games[req.body.name].players[req.headers.token].buildings[req.body.fromY][req.body.fromX]

  
  
  if((!req.body.fromIndex && req.body.fromIndex != 0) || !checkFull(req.body.fromIndex) || !checkLength(req.body.fromIndex, 0, building.inventory.length - 1)) {
    //if there is no fromIndex, or it is not in the range of the building's tory
    res.status(400).send("Integer 'fromIndex' required, must be between 0 and " + building.inventory.length - 1)
  }

  
  fromItem = fromBuilding.inventory[req.body.fromIndex]
  toItem = toBuilding.inventory[req.body.inventoryIndex]
  
  if((!req.body.amountTransfer && req.body.amountTransfer != 0) || !checkFull(req.body.amountTransfer) || req.body.amountTransfer > fromItem.amount) {
    //if there is no valid amount to transfer
    res.status(400).send("Integer 'amountTransfer' required, must be less than or equal to " + fromItem.amount)
  }


  if(req.body.amountTransfer < 1) {

    res.status(400).send("Integer 'amountTransfer' cannot be less than 1")
    return
  }

  
  if(toItem.item != items.empty && toItem.item != fromItem.item) {
    //if the index is a different item than what you are trying to
    //put into it
    res.status(400).send("The item being put into inventoryIndex does not match the items already there")
  }

  
  if(!fromItem.gettable) {
    res.status(400).send("The inventory slot you are trying to access at fromX fromY is locked, and cannot not be taken")
    return
  }


  if(!toItem.puttable) {
    res.status(400).send("The inventory slot you are trying to access at xpos ypos is locked, and items cannot be put in")
    return
  }
  
  if(addItem(req.headers.token, req.body.name, req.body.xpos, req.body.ypos, req.body.inventoryIndex, req.body.amountTransfer, fromItem.item) != true) {
    res.status(400).send("An error occurred")
    return
  }
  
  
  if(removeItem(req.headers.token, req.body.name, req.body.fromX, req.body.fromY, req.body.fromIndex, req.body.amountTransfer) != true) {
    //if somehow, the items can't be removed from the inventory. this would be very bad
    
    console.log("someone might be getting free items right now, definitely fix whatever bug is happening")

    //try to fix it by removing the items that were already given
    removeItem(req.headers.token, req.body.name, req.body.xpos, req.body.ypos, req.body.inventoryIndex, req.body.amountTransfer)

    res.status(400).send("An error occurred")
    return
  }
  
  res.status(200).send("Items succesfully transferred")
}