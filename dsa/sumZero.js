/**
 * ### Sum Zero
 * -- Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
 * >-- Return an array that includes both values that sum to zero or undefined if a pair does not exist
 */
// method -1 ==> using for loop
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [[arr[i], arr[j]]];
      }
    }
  }
}

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] + arr[right] === 0) {
//       return [[arr[left], arr[right]]];
//     }
//     if (arr[left] + arr[right] > 0) {
//       right--;
//     }
//     if (arr[left] + arr[right] < 0) {
//       left++;
//     }
//   }
//   return undefined;
// }
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3]
console.log(sumZero([-2, 0, 2, 3])); // [-2,2]
console.log(sumZero([1, 2, 3])); //undefined;
