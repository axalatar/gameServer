const globals = require('../../../index')

module.exports = (req, res) => {
  
  if(!req.body.small || req.body.small != true) {
    res.status(200).send(globals.games[req.body.name].players[req.headers.token].buildings)
    return
  }

  smallList = [[], [], []]
  for(i = 0; i < 3; i++) {
    for(j = 0; j < 3; j++) {
      smallList[j][i] = globals.games[req.body.name].players[req.headers.token].buildings[j][i].id
    }
  }
  res.status(200).send(smallList)
}