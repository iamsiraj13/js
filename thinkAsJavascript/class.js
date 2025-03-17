class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("person is eating");
  }
  sleep() {
    console.log("i am sleeping");
  }
  play() {
    console.log("person is playing");
  }
}

const sakib = new Person("Sakib", 20);
sakib.play();
sakib.eat();
sakib.sleep();
