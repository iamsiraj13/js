const arr = [12, 4, 5, 33, 56, 34, 2, 6];

function bSort(arr) {
  // Create a copy of the array to avoid mutating the original
  let sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        // Swap the elements
        let temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }
  console.log(sortedArr);

  return sortedArr;
}

console.log(bSort(arr));
