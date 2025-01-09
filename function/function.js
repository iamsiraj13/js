//  what is function
// input output processing

var arr1 = [1, 2, 3];
var arr2 = [45, 55, 12];
var arr3 = [54, 39, 40];

function sum(arr) {
  let result = 0;
  for (elm of arr) {
    result += elm;
  }
  console.log(result);
}

sum(arr1);
