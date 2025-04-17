/**
 * Given an array of inteagers nums and an integer k, return the total number
 * of sub arrays whose sum equals to k. A sub array is a contiguous not-empty
 * sequence of elements within an array
 *
 * example
 * input: nums = [1,1,1] k = 2
 * output 2
 *
 * input : nums = [1,2,3] k=3
 * output 2
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 9;
function subarray(nums, k) {
  let map = { 0: 1 };
  let count = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if ([sum - k] in map) {
      count++;
    }
    map[sum] = (map[sum] || 0) + 1;
  }
  return count;
}
console.log(subarray(nums, k));
