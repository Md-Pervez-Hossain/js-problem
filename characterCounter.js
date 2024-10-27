// make a function for Character Frequency Counter

const string = "a green apple"

function checkChar(string) {
  let obj = {}
  for (i = 0; i < string?.length; i++) {
    !(string[i] in obj) ? obj[string[i]] = 1 : obj[string[i]] = obj[string[i]] + 1
  }
  return obj
}
const charResult = checkChar(string)
console.log(charResult);