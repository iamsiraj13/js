/**
 * Given an array of inteagers nums and an integer k, return the total number of sub arrays whose sum equals to k. A sub array is a contiguous not-empty sequence of elements within an array
 *
 * example
 * input: nums = [1,1,1] k = 2
 * output 2
 *
 * input : nums = [1,2,3] k=3
 * output 2
 */

const nums = [1, 2, 3];
const k = 3;

function subarraySum(num, k) {
  let hashtable = {
    0: 1,
  };

  let sum = 0;
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
    if (hashtable[sum - k] in hashtable) {
      result += hashtable[sum - k];
    }
    hashtable[sum] = (hashtable[sum] || 0) + 1;
  }
  return result;
}
subarraySum(nums, k);
