let demo = document.querySelector("#demo");
let submit = document.querySelector("#submit");

// function myFunction(e) {
//   console.log(localStorage.setItem("text", e.value));
//   demo.innerHTML = JSON.parse(localStorage.getItem("text"));
//   e.value = "";
// }

// submit.addEventListener("click", myFunction());

window.addEventListener("resize", function () {
  demo.innerHTML = "sometext";
});
