function hello() {
  return "Line 2 code";
}

console.log("Line 1 code");
console.log("Line 3 code");

setTimeout(function () {
  console.log(hello());
}, 1000);
