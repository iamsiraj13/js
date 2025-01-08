//Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

function getLast(arr, n) {
  // check if array is empty return false
  if (arr == null) {
    return;
  }

  // check if n is null return undifined
  if (n == null || n < 0) {
    return "n should not negetive";
  }

  if (n > arr.length) {
    return "Insufficiant elment of array";
  }

  return arr.slice(arr.length - n);
}

console.log(getLast([1, 4, 5, 6, 7], 4));
