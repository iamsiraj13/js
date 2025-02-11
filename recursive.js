function factorial(n) {
  if (n === 0 || n === 1) {
    // Base case
    return 1;
  }
  return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // Output: 120

function sum(n) {
  if (n === 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}

console.log(sum(7000));

function sayHi(n) {
  if (n === 0) return;
  console.log("Hi calling");
  sayHi(n - 1);
}
console.log(sayHi(10));

function add(n) {
  if (n === 0) return 0;
  return n + add(n - 1);
}
console.log(add(5));

/**
 * Time complexity O(n)
 * Space complexity O(n)
 */
function sumRange(num) {
  if (num === 0) return 0;

  return num + sumRange(num - 1);
}

console.log(sumRange(10));

/**
 * Itterative solution
 * Impure recursive function
 */

function createRange(num1, num2) {
  let rangeArr = [];
  function helper(helperInput, target = 20) {
    rangeArr.push(helperInput);
    if (helperInput === target) return target;
    helper(helperInput + 1, target);
  }

  helper(num1, num2);
  return rangeArr;
}
// console.log(createRange(10, 20));
