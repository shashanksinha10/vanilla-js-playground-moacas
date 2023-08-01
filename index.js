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
    return n * factorialNumber(n - 1);
  }
}

console.log(factorialNumber(5));

// create an array with the range of number

function rangeOfNumber(start, end) {
  if (end < start) {
    return [];
  } else {
    let numb = rangeOfNumber(start, end - 1);
    numb.push(end);
    return numb;
  }
}

console.log(rangeOfNumber(1, 5));

// palinmdrome number

function palindromeNumber(n) {
  if (n.length > 0) {
    return -1;
  } else return +n.split('').reverse().join();
}

console.log(palindromeNumber(1, 2, 1));

// fabonacci number 0,0,1,1,2,3,

function fibRec(n) {
  if (n <= 1) return n;
  return fibRec(n - 1) + fibRec(n - 2);
}

console.log(fibRec(15));
