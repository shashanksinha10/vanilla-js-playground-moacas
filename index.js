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

// create an array with the range of number

function rangeOfNumber(start, end) {
  if (end<start) {
      return []
  } else {
      let numb = rangeOfNumber(start, end-1);
      numb.push(end)
      return numb

  }

}

console.log(rangeOfNumber(1,5))
