const nums = [0, 1];

function missingNumber(nums) {
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > mid) {
      right = mid;
      console.log(right);
    } else {
      left = mid + 1;
    }
  }

  return left;
}

missingNumber(nums);
