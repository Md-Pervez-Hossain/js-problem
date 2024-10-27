// make a functo to Find the frequency of each element in an array.

function checkFrequency(arr) {

  const obj = {}
  for (i = 0; i < arr.length; i++) {
    !(arr[i] in obj) ? obj[arr[i]] = 1 : obj[arr[i]] = obj[arr[i]] + 1
  }
  return obj
}

const arr = [1, 2, 3, 4, 5, 5, 3, 2, 1]

console.log(checkFrequency(arr));