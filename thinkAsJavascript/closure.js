function backAccount(initialBalance) {
  var balance = initialBalance;
  return function () {
    return balance;
  };
}

var account = backAccount(100000);

console.dir(account);

function taka(initbal) {
  var mytaka = initbal;
  return function () {
    return mytaka;
  };
}

var bal = taka(1000);
console.log(bal());
