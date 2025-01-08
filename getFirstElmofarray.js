//Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

// two input array and n

function getFirstElementOfArray(arr, n) {
  // check if array is empty return false
  if (arr == null) {
    return;
  }

  // check if n is null return undifined
  if (n == null || n < 0) {
    return;
  }

  if (n > arr.length) {
    return "Insufficiant elment of array";
  }

  return arr.slice(0, n);
}

console.log(getFirstElementOfArray([1, 4, 5, 6, 7], 4));
