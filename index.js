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

// fabonacci number 0,0,1,1,2,3

function fibRec(n) {
  if (n <= 1) return n;
  return fibRec(n - 1) + fibRec(n - 2);
}

console.log(fibRec(15));

//  reverse string
function returnStr(str) {
  if (str === '') {
    return 'oops';
  } else return returnStr(str.substr(1)) + returnStr(str.charAt(0));
}
console.log(returnStr('shashank'));

// Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

function subset(nums) {
  let result = [];
  let temp = [];

  function recursiveSubset(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }
    temp.push(nums[i]);
    recursiveSubset(nums, i + 1);
    temp.pop();
    recursiveSubset(nums, i + 1);
  }
  recursiveSubset(nums, 0);
  return result;
}

console.log(subset([1, 2, 3]));
