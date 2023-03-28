const nameToToken = require('../../helpers/nameToToken')
const checkLength = require('../../helpers/checkLength')
const globals = require('../../index')
const crypto = require("crypto");


module.exports = (req, res) => {
  
  if(!req.body.name || !checkLength(req.body.name, 3, 10) || typeof req.body.name != "string") {
    res.status(400).send("String 'name' field required, and must be between 3 and 10 characters");
    return;
  }

  
  if(!req.body.password || !checkLength(req.body.password, 5, 30) || typeof req.body.password != "string") {
    res.status(400).send("String 'password' field required, and must be between 5 and 30 characters");
    return;
  }


  const token = crypto.randomUUID()
    globals.accounts[token] = 
      {
        name: req.body.name,
        password: req.body.password,
        games: []
      }
  //creates the actual account

  
  res.status(200).send(token);

  nameToToken.addToken(req.body.name, token)
}