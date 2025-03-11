const paymentSuccess = true;
const marks = 80;

function enroll() {
  console.log("Course enrollment is in progress.");

  // promise define
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve("payment success");
      } else {
        reject("Payment Failed");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("Course on progress");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve("you have got certificate");
      } else {
        reject("you could not get enough marks");
      }
    }, 3000);
  });

  return progress;
}

function getCertificate() {
  console.log("Preparing your certificate");
  const promise = new Promise(function () {
    setTimeout(function () {
      console.log("Congrates you got the certificate");
    }, 1000);
  });

  return promise;
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log("Congrate you got the certificate");
  })
  .catch(function (err) {
    console.log(err);
  });
