function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1; // Pointer for the position of unique elements
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      // Check for unique elements
      nums[k] = nums[i]; // Place unique element at index k
      k++;
    }
  }
  return k;
}

// উদাহরণ ১:
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(k1, nums1.slice(0, k1)); // Output: 2, [1, 2]

// উদাহরণ ২:
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(k2, nums2.slice(0, k2)); // Output: 5, [0, 1, 2, 3, 4]
