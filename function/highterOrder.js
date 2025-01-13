// যখন একটা ফাংশন অন্য ফাংশন কে argument  হিসেবে গ্রহন করে বা ফাংশন রিটার্ন করে/
// তখন তাকে Highter order function  বলে।

function log() {
  return function () {
    console.log("hello");
  };
}

log()();

var numbers = [1, 2, "", 3];
var result = numbers.map((i) => i + 7);
console.log(result);

var players = [
  {
    name: "Shakib",
    avg: 38.8,
  },
  {
    name: "Tamim",
    avg: 40.85,
  },
  {
    name: "Mushfiq",
    avg: 37.37,
  },
];

var newplayer = players.filter((player) => player.avg >= 38);
console.log(newplayer);

// var updatePlayer = [];

// for (let i = 0; i < players.length; i++) {
//   if (players[i].avg >= 38) {
//     updatePlayer.push(players[i]);
//   }
// }
// console.log(updatePlayer);

// custom higher order function

const language = ["javascript", "python", "PHP", "c"];

function mapSiraj(arr, func) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(func(arr[i]));
  }
  return newArray;
}

var ok = mapSiraj(language, function (sd) {
  return sd + 2;
});

console.log(ok);
