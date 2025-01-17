/**
 *  --- Directions
 *  Given an array and chunk size , divide the array into many subarray where each subarray is of  length size
 *
 * --example
 *
 *  chunk([1,2,3,4,5],2) -> [[1,2],[3,4],[5]]
 */

function chunk(arr, size) {
  let chunk = [];

  for (let elm of arr) {
    const last = chunk[chunk.length - 1];

    if (last && last < size) {
      last.push(elm);
    } else {
      chunk.push([elm]);
    }
  }
  return chunk;
}
console.log(chunk([1, 2, 3, 4, 5], 3));
