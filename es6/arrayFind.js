var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = numbers.forEach((item) => {
  return item * 5;
});

console.log(res);

class Student {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  test() {
    console.log("hello");
  }
  example() {
    let array = [1, 2, 3, 4, 5];

    array.find(() => {
      this.test();
    });
  }
}

let siraj = new Student("sirajul", 20);
siraj.example();
