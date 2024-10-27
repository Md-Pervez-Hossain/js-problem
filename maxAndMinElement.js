// make a function to Find the maximum and minimum elements in an array.

function findMaxAndMinElement(arr) {
  let obj = {
    max: arr[0],
    min: arr[0]
  }
  for (i = 0; i < arr?.length; i++) {
    if (obj?.min >= arr[i]) {
      obj.min = arr[i]
    }
    if (obj?.max < arr[i]) {
      obj.max = arr[i]
    }
  }
  return obj
}

const maxandMinArr = [2, -3, -4, 5, 6, 7, 8, 9, 10, 70, 5, 18, 9, -150, 200, -5, 2, 4, 5]
const resultofFindMaxAndMinElement = findMaxAndMinElement(maxandMinArr)
console.log(resultofFindMaxAndMinElement);