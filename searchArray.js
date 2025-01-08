// search data

var arr = [4, 7, 2, 6, 8, 4, 55, 9, 89, 27];

var find = 7;
var isFound = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log("we gotted");
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log("Data not found");
}
