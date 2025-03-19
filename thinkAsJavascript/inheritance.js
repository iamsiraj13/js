class Person {
  // parant class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(this.name + "is eating");
  }
}

class Cricketer extends Person {
  // sub class
  constructor(name, age, type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
  }
  play() {
    console.log(this.name + " is playing");
  }
}

let sakib = new Cricketer("sakib", 20, "batter", "bangladesh");
let tamim = new Person("sakib", 20);

tamim.eat();
sakib.play();
