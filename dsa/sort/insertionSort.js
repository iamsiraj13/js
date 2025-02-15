function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // যে এলিমেন্টকে সঠিক জায়গায় বসাবো
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      // বড় মানগুলোর জায়গা সরাই
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key; // সঠিক জায়গায় বসাই
  }
  return arr;
}

let numbers = [5, 3, 8, 4, 2];
console.log(insertionSort(numbers)); // [2, 3, 4, 5, 8]
