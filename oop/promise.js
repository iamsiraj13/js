const statos = true;

console.log("Task 1");
// promise define
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (statos) {
      //   console.log("Task 2");
      resolve("Task 2");
    } else {
      //   console.log("Failed");
      reject("Failed");
    }
  }, 2000);
});

// promise call
promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log("Task 3");
