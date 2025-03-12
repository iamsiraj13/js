// for loop, for in , for of
let i = 0;
for (;;) {
  if (i <= 5) {
    i++;
    console.log(i);
  } else {
    break;
  }
}
console.log(i);

// for in

const obj = {
  name: "javascript",
  age: 20,
  founder: "brenden Eich",
};

for (elm in obj) {
  console.log(obj[elm]);
}

// for of

let arr = "Sirajul islam";

for (elm of arr) {
  console.log(elm);
}
