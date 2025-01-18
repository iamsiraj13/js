function maxAbsoluteDifference(nums) {
  // Input validation
  if (!Array.isArray(nums) || nums.length < 2) {
    throw new Error("Input must be an array with at least two elements");
  }

  let maxDiff = 0;

  for (let i = 0; i < nums.length; i++) {
    const nextIndex = (i + 1) % nums.length; // Handle circular array
    const diff = Math.abs(nums[i] - nums[nextIndex]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
}

// Example 1
try {
  const nums1 = [1, 2, 4];
  console.log("Example 1 Output:", maxAbsoluteDifference(nums1)); // Output: 3
} catch (error) {
  console.error("Example 1 Error:", error.message);
}

// Example 2
try {
  const nums2 = [-5, -10, -5];
  console.log("Example 2 Output:", maxAbsoluteDifference(nums2)); // Output: 5
} catch (error) {
  console.error("Example 2 Error:", error.message);
}

// Example 3: Edge case (invalid input)
try {
  const nums3 = [7]; // Invalid case: only one element
  console.log("Example 3 Output:", maxAbsoluteDifference(nums3)); // Should throw an error
} catch (error) {
  console.error("Example 3 Error:", error.message);
}
