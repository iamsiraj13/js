const getVar = () => {
  setTimeout(function () {
    console.log("A Function that takes some time");
  }, 3000);
};
const printSomething = () => {
  console.log("Another Function");
};
getVar();
printSomething();

const getVarC = (callback) => {
  setTimeout(function () {
    console.log("A Function that takes some time");
    callback();
  }, 5000);
};
const printSomethingC = () => {
  console.log("Another Function");
};
getVarC(printSomethingC);

var arr = [1, 2, 3, 4, 5, 65];

arr.forEach(function (value, index, arr) {
  console.log({ value }, { index }, { arr });
});

// how  to create  method like Array.forEach()
function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
forEach(arr, function (value, index, arr) {
  console.log(value, index, arr);
});
