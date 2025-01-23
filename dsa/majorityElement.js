/**
 * Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */
const nums1 = [2, 2, 1, 1, 1, 2, 2];
const nums2 = [3, 2, 3];
function majorityElement(nums) {
  let hashmap = {};
  for (elm of nums) {
    hashmap[elm] = (hashmap[elm] || 0) + 1;
  }
  for (const key in hashmap) {
    if (hashmap[key] > nums.length / 2) {
      return parseInt(key);
    }
  }
  return null;
}
console.log(majorityElement(nums2));
