const arr1 = [5, 7, 12, 19];
const arr2 = [2, 3, 8, 21];
console.log(arr2.sort());

function mergeSort(arr1, arr2) {
  return arr1.concat(arr2).sort();
}
console.log(mergeSort(arr1, arr2));
