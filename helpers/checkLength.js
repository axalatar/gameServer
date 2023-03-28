//checks the length of a num or string
//against a maximum and minimum value, returns
//true if within the bounds or false if not

//if it is a string, it checks the number of characters

module.exports = (request, min, max) => {
  var length;
  
  if(typeof request == "string") {
    length = request.length
  }
    
  else if(typeof request == "number") {
    length = request
  }
    
  else {
    return false
    //automatically returns false if not a number
    //or string 
  }
  
  if(length >= min && length <= max) {
    return true;
  }
  
return false;
}