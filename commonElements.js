// make a function to Find the common elements between two arrays.

const arr1 = [1, 2, 5, 6, 8, 9]
const arr2 = [10, 5, 2, 3, 4, 7, 8]

function commonElements(arr1, arr2) {
  const commonEle = []
  for (i = 0; i < arr1.length; i++) {
    if (arr1.includes(arr1[i]) === true && arr2.includes(arr1[i]) === true) {
      commonEle.push(arr1[i])
    }
  }
  return commonEle

}

console.log(commonElements(arr1, arr2));