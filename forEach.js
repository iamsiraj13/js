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
