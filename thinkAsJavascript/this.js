// 1. implicit bindng
// 2. explicit binding
// 3. new binding
// 4. window binding

var printName = function (v1, v2, v3) {
  console.log(`${this.name} is ${v1} ${v2} ${v3}`);
};

var sakib = {
  name: "sakib",
  age: 30,
};

var v1 = "Handsome";
var v2 = "All Rounder";
var v3 = "Best Player";
var v = [v1, v2, v3];
var play1 = printName.call(sakib, v1, v2, v3);
var play2 = printName.apply(sakib, v);
var play3 = printName.bind(sakib, v1, v2, v3);
play3();
