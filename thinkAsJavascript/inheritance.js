class Person {
  // parant class

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(this.name + "is eating");
  }
  static isEqualAGe() {
    console.log("from is equal age");
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

  get getName() {
    // getter
    console.log(this.name);
  }
  set setName(value) {
    this.name = value;
  }
}

let sakib = new Cricketer("sakib", 20, "batter", "bangladesh");

sakib.setName = "Sirajul";
sakib.getName;
sakib.name = "hello world";
console.log(sakib);

Person.isEqualAGe();
