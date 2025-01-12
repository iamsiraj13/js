function createCounter(init) {
  let n = init;
  return {
    increment: function () {
      return ++n;
    },
    decrement: function () {
      return --n;
    },
    reset: function () {
      return (n = init);
    },
  };
}

var counter = createCounter(10);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
