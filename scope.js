function scopes() {
  var x = "x from scope";
}
scopes();
if (true) {
  var x = "hello";
}
console.log(x);
