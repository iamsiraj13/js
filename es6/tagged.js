var player1 = "Sakib";
var player2 = "Tamim";

function modif(string, ...values) {
  const m = string.reduce((prev, current) => {
    return prev + current + (values.length ? "Mr." + values.shift() : "");
  }, "");
  return m;
}

console.log(modif`we have ${player1} and ${player2} this is nice`);
