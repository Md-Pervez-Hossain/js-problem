// make a function to Find the longest word in an array of strings.

function longestWord(arr) {

  let longWord = []
  let bigWord = arr[0].length;
  for (i = 0; i < arr.length; i++) {
    bigWord < arr[i].length && longWord.push(arr[i])
  }
  return longWord
}

const arr = ["pervez", "sadia", "nadia", 'samira', 'raihan', 'tamanna']

console.log(longestWord(arr))