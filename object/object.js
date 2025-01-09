// objects

/**
 * student 1
 * math: 80
 * chemistry: 75
 * physics: 56
 * higher math: 90
 */

// [ 80, 75 , 86, 90 ]
var obj = {
  x: 10,
};

console.log(obj["x"]);

obj.x = 20;
console.log(obj);

/*---------*/

var obj2 = Object({
  name: "sirajul",
});
obj2.x = 100;
obj2.X = 200;
obj2.x = null;
console.log(obj2);
