// make a function to Find the second largest and second smallest elements in an array.


// function findSeceondMinAndMaxElement(arr) {
//   let LargestElement = {
//     Largest: arr[0],
//     Smallest: arr[0]
//   }
//   let arr2 = [];
//   let arr3 = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > LargestElement.Largest) {
//       LargestElement.Largest = arr[i]
//     }
//     if (arr[i] < LargestElement.Smallest) {
//       LargestElement.Smallest = arr[i]
//     }
//     arr2 = arr.filter(data => data < LargestElement?.Largest)
//     arr3 = arr.filter(data => data > LargestElement?.Smallest)
//   }
//   let SeceondLargestElement = {
//     SeceondLargest: arr2[0],
//   }
//   let SeceondSmallestElement = {
//     SeceondSmallest: arr3[0]
//   }
//   for (i = 0; i < arr2.length; i++) {

//     if (arr2[i] > SeceondLargestElement.SeceondLargest) {
//       SeceondLargestElement.SeceondLargest = arr2[i]
//     }
//   }
//   for (i = 0; i < arr3.length; i++) {
//     if (arr3[i] < SeceondSmallestElement.SeceondSmallest) {
//       SeceondSmallestElement.SeceondSmallest = arr3[i]
//     }
//   }
//   return { SeceondLargestElement, SeceondSmallestElement }
// }

// const arr = [-4, 3, 2, 6, 10, 8, 13, 12, 11, 4, 7, 8, 9, 1, -2,]

// console.log(findSeceondMinAndMaxElement(arr))

function findSeceondMinAndMaxElement(arr) {
  let max = arr[0];
  let secMax = arr[0];
  let min = arr[0];
  let secMin = arr[0]
  for (i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > max) {
      secMax = max;
      max = element;
    } else if (element > secMax) {
      secMax = element;
    }
    if (element < min) {
      secMin = min;
      min = element;
    } else if (element < secMin) {
      secMin = element;
    }
  }
  return { secMax, secMin }

}

const arr = [4, -3, -2, 6, 10, 8,]

console.log(findSeceondMinAndMaxElement(arr))

