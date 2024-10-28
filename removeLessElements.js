// make a function Remove elements from an array that are less than a specified value.

function removeUnderElements(arr, value) {
  return arr.filter(arr => arr > value)
}

const arr = [1, 2, 3, 4, 2, 6, 10, 4, 3]

console.log(removeUnderElements(arr, 6))