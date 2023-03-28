const globals = require('../../../index')
const buildings = require('../../../helpers/enums/buildings')

module.exports = (req, res) => {
        globals.games[req.body.name].players[req.headers.token].buildings[ypos][xpos] = buildings.empty
        res.status(200).send("Building succesfully destroyed")
  }