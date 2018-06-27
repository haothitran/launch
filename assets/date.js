/*------------------------------------------------------------------------------
-- // DATE
------------------------------------------------------------------------------*/

var currentDate = new Date();

// names for months
var monthName = [
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
  "December"
];

// names for weekdays
var weekdayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// date
var year = currentDate.getFullYear();
var month = monthName[currentDate.getMonth()];
var weekday = weekdayName[currentDate.getDay()];
var day = currentDate.getDate();

// time
var hours = currentDate.getHours();
var mins = currentDate.getMinutes();
var secs = currentDate.getSeconds();

// format time
if (hours < 10) hours = "0" + hours;
if (mins < 10) mins = "0" + mins;
if (secs < 10) secs = "0" + secs;

// print
var announceDate =  "Today is " + weekday + ", " + month + " " + day + ", " + year + ". <br/> Current time is " + hours + ":" + mins + ":" + secs + ".";
document.getElementById("date").innerHTML = announceDate.toString();
