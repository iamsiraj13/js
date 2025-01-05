var date = new Date();

var day = date.getDay();
var month = date.getMonth();
var hour = date.getHours();
var prepand = hour > 12 ? "PM" : "AM";
var time = date.getTime();
var minute = date.getMinutes();
var second = date.getSeconds();

hour = hour >= 12 ? hour - 12 : hour;

// Array of day names
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(monthList[month]);

console.log(daylist[day]);

console.log(prepand);

console.log(hour + " " + prepand + ":" + minute + ":" + second);
