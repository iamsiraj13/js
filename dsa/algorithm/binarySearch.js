function search(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 2;

console.log(search(nums, target));
/**
 *
 * [1, 1, 1, 1, 2]  target 1
 * l   m        h    mid = (0+4)/2 = 2
 *
 *
 *
 *
 */
