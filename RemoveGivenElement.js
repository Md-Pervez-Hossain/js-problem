//make a function to Remove all occurrences elements of a specified value from an array

const arr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 8]

function removeElements(value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr
}



console.log(removeElements(8));