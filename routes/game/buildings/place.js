const globals = require('../../../index')
const checkLength = require('../../../helpers/checkLength')
const checkFullNum = require('../../../helpers/checkFullNumber')
const removeItem = require('../../../helpers/removeItem')
const buildings = require('../../../helpers/enums/buildings')
const items = require('../../../helpers/enums/items')

module.exports = (req, res) => {
  
  if(globals.games[req.body.name].players[req.headers.token].buildings[req.body.ypos][req.body.xpos] != buildings.empty) {
    res.status(400).send("There is already a building at the given location, use the 'destroy' action to remove it")
    return
  }

  
  fromBuilding = globals.games[req.body.name].players[req.headers.token].buildings[req.body.fromY][req.body.fromX]

  
  if(items[fromBuilding.inventory[req.body.inventoryIndex].item].type != 'building') {
    res.status(400).send("The given inventory index points to a non-building item")
    return
  }

globals.games[req.body.name].players[req.headers.token].buildings[req.body.ypos][req.body.xpos] = buildings[items[fromBuilding.inventory[req.body.inventoryIndex].item].building]
  
  if(removeItem(req.headers.token, req.body.name, req.body.fromX, req.body.fromY, req.body.inventoryIndex, 1) == false) {
    res.status(400).send("An error occurred")
    return
  }
  
  
  
  res.status(200).send("Building succesfully created")
}