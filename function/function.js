//  what is function
// input output processing

var arr1 = [1, 2, 3];
var arr2 = [45, 55, 12];
var arr3 = [54, 39, 40];
console.log(toString.call(arr1));

function sum(arr) {
  if (toString.call(arr) !== "[object Array]") {
    return;
  }
  let result = 0;
  for (elm of arr) {
    result += elm;
  }
  console.log(result);
}

sum(arr1);

function addall() {
  console.log(arguments);
  var arr = Object.values(arguments);
  var result = 0;
  for (elm of arr) {
    result += elm;
  }
  console.log(result);
}

addall(1, 2, 3, 4, 5, 6, 7);
