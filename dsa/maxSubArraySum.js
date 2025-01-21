/**
 * @maxSubarraySum
 * >Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * > The function should calculate the maximum sum of n consecutive elements in the array
 */

function maxSubarraySum(arr, num) {
  if (arr.length < 2) return false;

  let i = 0;
  let j = 1;
  let max = -Infinity;
  while (i < arr.length) {
    if (arr[i] + arr[j] > max) {
      max = arr[i] + arr[j];
    }
    i++;
    j++;
  }
  return max;
}
console.log(maxSubarraySum([-1, -2, -5, -2, -8, -1, -5], 2));
