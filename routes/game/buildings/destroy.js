const globals = require('../../../index')
const buildings = require('../../../helpers/enums/buildings')

module.exports = (req, res) => {
  globals.games[req.body.name].players[req.headers.token].buildings[ypos][xpos] = buildings.empty
  globals.updaters[req.body.name][req.headers.token].buildings[ypos][xpos] = undefined
  res.status(200).send("Building succesfully destroyed")
  }