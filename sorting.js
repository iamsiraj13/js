/**
 * Sorting (Organizing data in order)
 *
 *
 *
 *
 */

// desending sorted array
// let arr = [1, 4, 2, 5, 7, 3, 9, 10];

// console.log(
//   arr.sort(function (a, b) {
//     return b - a;
//   })
// );

let fruits = ["bannana", "bitrut", "apple", "pepe", "mango"];

function sortby(arr) {
  let sorted = arr.sort(function (a, b) {
    let nameA = a.toLowerCase();
    let nameB = b.toLowerCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 1;
    }
  });
  return sorted;
}
console.log(sortby(fruits));

/**
 * @primitiveSort or @QuadraticSort
 * 1. Bubble sort
 * 2. Selection Sort
 * 3. Insertion Sort
 * @EfficientSort
 * 1. Merge Sort
 * 2. Quick Sort
 */

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
