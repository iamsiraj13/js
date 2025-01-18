function minCost(arr, brr, k) {
  const n = arr.length;

  // If arrays are already equal, return 0
  if (arraysEqual(arr, brr)) {
    return 0;
  }

  // Helper function to calculate cost of direct transformations
  function calculateDirectCost(a, b) {
    return Math.abs(a - b);
  }

  // Helper function to check if arrays are equal
  function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, idx) => val === b[idx]);
  }

  // Generate all possible permutations
  function getPermutations(arr) {
    if (arr.length <= 1) return [arr];

    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
      const perms = getPermutations(remaining);

      for (const perm of perms) {
        result.push([current, ...perm]);
      }
    }
    return result;
  }

  // Function to find minimum cost for a given permutation
  function getCostForPermutation(perm) {
    let totalCost = 0;
    for (let i = 0; i < n; i++) {
      totalCost += calculateDirectCost(perm[i], brr[i]);
    }
    return totalCost;
  }

  let minTotalCost = Infinity;

  // Try without rearrangement
  let directCost = 0;
  for (let i = 0; i < n; i++) {
    directCost += calculateDirectCost(arr[i], brr[i]);
  }
  minTotalCost = directCost;

  // Try with rearrangement
  const perms = getPermutations(arr);
  for (const perm of perms) {
    const costWithRearrangement = k + getCostForPermutation(perm);
    minTotalCost = Math.min(minTotalCost, costWithRearrangement);
  }

  return minTotalCost;
}

// Test cases
console.log(minCost([-7, 9, 5], [7, -2, -5], 2)); // Expected output: 13
console.log(minCost([2, 1], [2, 1], 0)); // Expected output: 0
console.log(minCost([-9], [9], 29)); // Expected output: 0
