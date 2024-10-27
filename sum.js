// problem 1 : Make a Function to caculate the sum of all elements in an array ?

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    sum = sum + element
  }
  return sum
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumResult = calculateSum(arr)
//console.log(sumResult); //output : 55