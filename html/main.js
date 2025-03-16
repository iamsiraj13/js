let button = document.querySelector("#btn");

const myCollection = document.getElementsByTagName("p");
function myfunc() {
  console.log(myCollection);
  for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "blue";
  }
}
button.addEventListener("click", myfunc);
