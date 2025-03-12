function num(x) {
  return x * 10;
}

const num1 = (x) => {
  return x * 10;
};
const num2 = (x) => x * 10;
console.log(num(10));

var javascript = {
  name: "Javascript",
  libraries: ["React", "Angular", "Vue"],
  print: function () {
    var self = this;
    this.libraries.forEach(function () {
      console.log(self.name);
    });
  },
};

console.log(javascript.print());

function Person(name) {
  this.name = name;
}
var sakib = new Person("sakib");
console.log(sakib);
