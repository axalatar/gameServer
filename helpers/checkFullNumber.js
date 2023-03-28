module.exports = (num) => {
  if(typeof num == "number") {
    if(Math.floor(num) == num) {
      return true
    }
  }
  return false
}