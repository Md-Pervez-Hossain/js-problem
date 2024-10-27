// make a function and Check if Array is a Subset of Another Array.
let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [1, 2, 3];
let array3 = [8, 9, 7];
function detectSubset(parent, child) {

  for (let i = 0; i < child.length; i++) {
    let childElement = child[i]
    const result = parent.includes(childElement)
    if (result === false) {
      return false
    }
  }
  return true

}
const result = detectSubset(array1, array3)
console.log(result); // false








