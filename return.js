function greet(mgs) {
  function greetings(name) {
    return mgs + "," + name + "!";
  }
  return greetings;
}

var gm = greet("Good Mornig")("mrnaye");
// var mgs = gm("Sirajul islam");
// console.log(gm);
// console.log(mgs);

function base(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i <= b; i++) {
      result *= n;
    }
    return result;
  };
}
const base10 = base(7);

console.log(base10(7));
