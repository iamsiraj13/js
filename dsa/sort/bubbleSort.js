// function bubbleSort(arr) {
//   let swap;
//   do {
//     swap = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swap = true;
//       }
//     }
//   } while (swap);
// }

// var arr = [8, 20, -2, -6, 0, -233, 1, 53, 3535, 35, 3535353535, 35, 35, 35];

// bubbleSort(arr);

// console.log(arr);

// Big-O = O(n^2)

// another way
let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

let n = myArray.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (myArray[j] > myArray[j + 1]) {
      // Swap elements
      [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
    }
  }
}

console.log("Sorted array:", myArray);
