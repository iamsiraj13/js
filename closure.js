function done(profit) {
  console.log(profit);

  return function (interest) {
    console.log(interest);
    console.log(profit * interest);
  };
}

console.log(done(30)(30));
const business = done(10);

business(15);

function parentFunction() {
  var a = 6;
  function childFunction() {
    var b = 4;
    console.log("Sum: " + (a + b));
    return a + b;
  }
  return childFunction();
}

console.log(parentFunction());
