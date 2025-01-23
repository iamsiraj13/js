/**
 * Find index from an array of your targeted value
 */

function searchIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

console.log(searchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));
