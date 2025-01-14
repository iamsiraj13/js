/**
 * Write a function which accept two arrays and check every value of the first array has it's corresponding in second array
 * The frequency value must be same
 *  -- Example
 * isSame([1,2,4,5] , [3,5,6,10]) // false
 * isSame([1,2,4,5] , [3,4,5,2]) // true
 *
 *
 *  time complexity
 * O(n * (m + n)) -> O(n * n)
 *
 * space complexity O(1)
 */
function isSame(arr1, arr2) {
  // checking array length
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]);

    // we haven't found the index
    if (index === -1) {
      return false;
    } else {
      arr2.splice(index, 1);
    }
  }
  return true;
}

console.log(isSame([1, 2, 4, 1], [1, 4, 5, 2]));

// 1 -1 (remove 1) [4, 5, 2]
// 2 -2 (remove 2) [4, 5]
// 4 -4 (remove 4) [5]
// 5 -5 (remove 5) []
