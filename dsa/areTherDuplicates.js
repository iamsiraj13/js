/**
 * @areThereAnyDuplicates
 * --> Write a function called areThereAnyDuplicates which accepts a sorted
 * array of integers.
 * --> The function should return true if there is any duplicates and false
 * if there is no duplicates
 *
 */

// time complexity O(n)
// function areThereAnyDuplicates(arr) {
//   let i = 0;
//   let j = 1;
//   while (i < arr.length) {
//     if (arr[i] === arr[j]) {
//       return true;
//     }
//     i++;
//     j++;
//   }
//   return false;
// }

// time complexity O(n^2)
function areThereAnyDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(areThereAnyDuplicates([1, 1, 1, 1, 1, 1, 2]));
console.log(areThereAnyDuplicates([1, 2, 3, 4, 5, 6, 7, 8]));
