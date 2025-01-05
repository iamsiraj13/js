let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
// console.log(sum);
let isRun = true;

while (isRun) {
  var rand = Math.floor(Math.random() * 1000 + 100);
  if (rand === 9) {
    console.log("Winner");
    isRun = false;
  } else {
    console.log(rand);
  }
}
