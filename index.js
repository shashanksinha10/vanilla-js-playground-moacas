function multiply(arr) {
  if (arr.length <= 0) {
    return 1;
  } else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
}

console.log(multiply([1, 2, 3, 4, 5]));

// recursion function for factorial

function factorialNumber(n) {
  if (n === 0) {
      return 1;
  } else {
     return n * factorialNumber(n -1);
  }
  
}

console.log(factorialNumber(5))
