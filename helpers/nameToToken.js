var tokenTable = {} 
//list of all tokens, with usernames as keys

const addToken = (name, token) => {
  tokenTable[name] = token
}

const getToken = (name) => {
  if(name in tokenTable) {
    return tokenTable[name]
  }
}


module.exports = {getToken: getToken, addToken: addToken};