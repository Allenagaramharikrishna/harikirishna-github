//switch statement
function getMonthString(num) {
  var month; //Create a local variable to hold the string
  switch (num) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "Invalid month";
  }
  return month;
}
theDate = new Date();
console.log("The month is ", getMonthString(theDate.getMonth()));

//displaying odd or even number between 1 to 100
for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i + "");
  }
}
for (var i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i + "");
  }
}

//Displaying a star pattern
let col;
let row;
let star = "";
// debugger;
for (row = 1; row <= 4; row++) {
  // printing spaces
  // star+="\n";
  for (col = 1; col <= 4; col++) {
    star += "*";
  }
  star += "\n"; //line break
}
console.log(star);

let n = 4;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
