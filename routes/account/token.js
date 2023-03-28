const globals = require('../../index')
const checkLength = require('../../helpers/checkLength')
const nameToToken = require('../../helpers/nameToToken')


module.exports = (req, res) => {
  
  if(!req.body.name || typeof req.body.name != "string") {
    res.status(400).send("String 'name' field required");
    return;
  }

  
  if(!checkLength(req.body.name, 3, 10)) {
    res.status(400).send("The account with the given name does not exist")
    //there's no way an account with a name over 10 characters or under
    //3 characters could exist, so we don't have to go through the whole
    //loop that comes next
    return;
  }


  if(!req.body.password || typeof req.body.password != "string") {
    res.status(400).send("String 'password' field required");
    return;
  }
  
    exists = false
    for (const [key, value] of Object.entries(globals.accounts)) {
    //checks every account to see if any have a matching nam   
      if(value.name == req.body.name) { 
        exists = true
        break;
      }
    }

  
    if(!exists) {
      res.status(400).send("The account with the given name does not exist")
      return
    }
        

  
    if(!globals.accounts[nameToToken.getToken(req.body.name)]) {
    //this shouldn't ever happen, it checks if the name which exists
    //in the global accounts variable somehow doesn't exist in the
    //nameToToken table
      res.status(400).send("An error occurred")
      console.log("Something is up with the token table")
      return
    }

  
    if(globals.accounts[nameToToken.getToken(req.body.name)].password != req.body.password) {
      res.status(400).send("Incorrect password")
      return;
    }


  res.status(200).send(nameToToken.getToken(req.body.name))
}