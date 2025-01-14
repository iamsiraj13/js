/**
 * Adding sum from an array
 * you have been provided a array of number
 * you have to sum the numbers
 */

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  console.log(result);
}

sum([10, 10, 10, 10]);

/**
 * you have been provided an array of number
 * you have to find the maximum number from array
 */

let arr = [1, 4, 53, 23, 5325, 35];

function max(arr) {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  console.log(maxNum);
}
max(arr);
/**
 * you have been provided an array of number
 * you have to find the minimum number from array
 */

function min(arr) {
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    }
  }
  console.log(minNum);
}
min(arr);
// method 2
console.log(Math.min(...arr));
console.log(Math.max(...arr));
