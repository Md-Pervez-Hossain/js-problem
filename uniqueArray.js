// make a function to Remove duplicate elements from an array.
function findDuplicateArry(arr) {
  let uniqueElementArr = []
  for (i = 0; i < arr?.length; i++) {
    !(uniqueElementArr.includes(arr[i])) && uniqueElementArr.push(arr[i])
  }
  return uniqueElementArr
}
const duplicateArry = [2, 3, 2, 1, 3, 5, 5, 5, 6, 3, 8]
console.log(findDuplicateArry(duplicateArry));