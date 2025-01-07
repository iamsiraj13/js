// get the current date
var today = new Date();

// Get the date of month
var dd = today.getDate();

// Get the month
var mm = today.getMonth() + 1;

var yy = today.getFullYear();

// Format the date as mm-dd-yyyy and log it
today = mm + "-" + dd + "-" + yy;
console.log(today);

// Format the date as mm/dd/yyyy and log it
today = mm + "/" + dd + "/" + yy;
console.log(today);

// adding level
if (mm < 10) {
  mm = "0" + mm;
}
// adding level
if (dd < 10) {
  dd = "0" + dd;
}

// Format the date as dd/mm/yyyy and log it
today = dd + "/" + mm + "/" + yy;
console.log(today);
// Format the date as dd/mm/yyyy and log it
today = dd + "-" + mm + "-" + yy;
console.log(today);
