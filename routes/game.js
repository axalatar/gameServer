const express = require('express');
const router = express.Router();
const globals = require('../index')
const checkLength = require('../helpers/checkLength')
const checkFullNum = require('../helpers/checkFullNumber')
const buildings = require('../helpers/enums/buildings')


const createGame = require("./game/utilities/create")
const joinGame = require("./game/utilities/join")

const placeBuilding = require("./game/buildings/place")
const transferItems = require("./game/buildings/transfer")
const listBuildings = require("./game/buildings/list")
const destroyBuilding = require("./game/buildings/destroy")


router.use((req, res, next) => {
  //checks whether or not there is a valid token, because all routes in the game subdomain
  //need a valid token
    if(!req.headers.token || typeof req.headers.token != "string" || !globals.accounts[(req.headers.token)]) {
      res.status(400).send("Invalid token")
      return;
    }
  
    next()
  })





router.post("/utilities", (req, res) => {
  //just stuff like creating games, joining games, etc.
  //none of the stuff for actually playing games is here

  if(!req.body.name || typeof req.body.name != "string" || !checkLength(req.body.name, 3, 10)) {
    res.status(400).send("String 'name' field required, must be 3-10 characters");
    return;
  }
  
  if(!req.body.password || typeof req.body.password != "string" || !checkLength(req.body.password, 5, 20)) {
    res.status(400).send("String 'password' field required, must be 5-20 characters")
    return
  }
  
  //both creating and joining games need a name and password, so it is checked here

  
  switch(req.headers.action) {
    case "create":
      createGame(req, res);
      break
    case "join":
      joinGame(req, res);
      break
    default:
      res.status(400).send("Unknown/missing 'action' in header");
    }
});





router.post("/buildings", (req, res) => {
  //everything to do with creating and 
  //interacting with buildings
  
  if(!req.body.name) {
    res.status(400).send("String 'name' required, must be of a current game")
    return
  }

      

    if(!globals.games[req.body.name]) {
      res.status(400).send("'name' must be the name of a current game")
      return
    }

    if(req.headers.action != "list") {

    
      if((!req.body.xpos && req.body.xpos != 0) || !checkLength(req.body.xpos, 0, 2) || !checkFullNum(req.body.xpos)) {
        res.status(400).send("Integer 'xpos' required, must be between 0-2")
        return
      }

      if((!req.body.ypos && req.body.ypos != 0) || !checkLength(req.body.ypos, 0, 2) || !checkFullNum(req.body.ypos)) {
        res.status(400).send("Integer 'ypos' required, must be between 0-2")
        return
      }
  //x and y positions of the building
      if(globals.games[req.body.name].players[req.headers.token].buildings[req.body.ypos][req.body.xpos].id == buildings.empty.id && req.headers.action != "place") {
      //check to make sure the building exists, as long as we aren't trying to place a building there
 
        res.status(400).send("The xpos and ypos coordinates point to an empty spot")
        return
      }

      if(req.headers.action == "place" || req.headers.action == "transfer") {
    
      if((!req.body.fromX && req.body.fromX != 0) || !checkLength(req.body.fromX, 0, 2) || !checkFullNum(req.body.fromX)) {
        res.status(400).send("Integer 'fromX' required, must be 0-2")
        return
      }

  
      if((!req.body.fromY && req.body.fromY != 0) || !checkLength(req.body.fromY, 0, 2) || !checkFullNum(req.body.fromY)) {
        res.status(400).send("Integer 'fromY' required, must be 0-2")
        return
      }


      fromBuilding = globals.games[req.body.name].players[req.headers.token].buildings[req.body.fromY][req.body.fromX]

      if(!fromBuilding.id) {
      //this should never happen; it would mean a building on the
      //planet is not in the buildings.js enum
    
        res.status(400).send("Invalid building")
        console.log("Something is wrong with the buildings!")
        console.log(fromBuilding)
        return
      }


      if(fromBuilding.id == buildings.empty.id) {
        res.status(400).send("fromX and fromY point to an empty spot")
        return
      }
  

      if((!req.body.inventoryIndex && req.body.inventoryIndex != 0)|| !checkLength(req.body.inventoryIndex, 0, fromBuilding.inventory.length - 1) || !checkFullNum(req.body.inventoryIndex)) {
      //gets the index of the inventory in the fromBuilding to get the building item from
    
        res.status(400).send("Integer 'inventoryIndex' required, must be from 0 to " + (fromBuilding.inventory.length - 1))
        return
      }

      if(!globals.games[req.body.name].players[req.headers.token].buildings[req.body.fromY][req.body.fromX].inventory[req.body.inventoryIndex].gettable) {
        res.status(400).send("The inventory index inventoryIndex at the coordinates fromX fromY is locked")
        return
      }
    }
    }

  
  //all of these take in name (name of the game) and xpos and ypos (coordinates of the building)
  switch(req.headers.action) {
    case "place":
      //place a building, requires an item form of the building first. takes in
      //fromX and fromY (coordinates of the building with the building item),
      //and inventoryIndex, (index of the from building's inventory with the item in it)
      
      placeBuilding(req, res)
      break
    case "craft":
      //craft an item in a factory when given a recipe and materials
      break
    case "transfer":
      //transfer items from one building to another
      //takes in xpos, ypos, fromX, fromY, inventoryIndex (index to send the items
      //to), fromIndex (index to take the items from), and amountTransfer
      
      transferItems(req, res)
      break
    case "list":
      //returns a list of all of the player's buildings
      //just needs a token and a game name, optionally also a 'small' boolean
      //if you just want to show building ids and not the whole inventory and things
      
      listBuildings(req, res)
      break
    case "destroy":

      destroyBuilding(req, res)
      //you know what it does
      break
    default:
      res.status(400).send("Unknown/missing 'action' in header")
        }
    })

module.exports = router;
