//1.Addition//
function addition(a, b) {
  return a + b;
}
console.log(addition(5, 8));

//substraction//
function sub(a, b) {
  return a - b;
}
console.log(sub(15, 9));
//2.converts into minutes to seconds//
function converts(minutes) {
  return minutes * 60;
}
console.log(converts(60));
//3.increment//
var mynumber = 1;
console.log(mynumber++);
console.log(mynumber);
console.log(mynumber + 1);
console.log(mynumber + 2);
console.log(mynumber + 3);
//5.voltage and current//
function circuitpower(voltage, current) {
  return voltage * current;
}
console.log(circuitpower(100, 50));

console.log(find());
//star pattern//
var i, j;
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    document.write("*&nbsp;&nbsp;&nbsp");
  }
  document.write("<br>");
}

let string1 = "";
for (row = 1; row <= 5; row++) {
  for (col = 1; col <= 5; col++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string1);

let string2 = "";
for (row = 1; row <= 5; row++) {
  for (col = 1; col <= row; col++) {
    string2 += "*";
  }
  string2 += "\n";
}
console.log(string2);

//age to days//

function age(a) {
  return `${a} years has ${a * 365} days`;
}
console.log(age(12));

//is equal to//

function word(a, b) {
  if (a.length == b.length) {
    console.log("true");
  } else {
    console.log("false");
  }
}
word("Hari", "puneeth");

//7.Two arguments//

function add(a, b) {
  if (a + b == 10 || (a = 10) || (b = 10)) {
    console.log("true");
  } else {
    console.log("false");
  }
}
add(3, 1);

let greeting = (a) => {
  return `good morning ${a}`;
};
console.log(greeting("Hari"));

let string = "";
for (row = 1; row <= 5; row++) {
  for (col = 1; col <= row; col++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);

let m = 5;
let string3 = "";
for (row = 1; row <= 5; row++) {
  for (col = 1; col <= row; col++) {
    string3 += col;
  }
  string3 += "\n";
}
console.log(string3);

let p = 5;
let string4 = "";
for (row = 0; row < 2 * p; row++) {
  let column = row > p ? p * 2 - row : row;
  for (col = 1; col <= column; col++) {
    string4 += "* ";
  }
  string4 += "\n";
}
console.log(string4);

let b = 5;
let string6 = "";
for (row = 1; row <= 5; row++) {
  let space = b - row;
  for (s = 0; s <= space; s++) {
    string6 += " ";
  }
  for (col = 1; col <= row; col++) {
    string6 += "* ";
  }
  string6 += "\n";
}
console.log(string6);

let c = 5;
let string7 = "";
for (row = 1; row <= c; row++) {
  for (s = 0; s <= c - row; s++) {
    string7 += " ";
  }
  for (col = 1; col <= row; col++) {
    string7 += "*";
  }
  string7 += "\n";
}
console.log(string7);

let d = 5;
let string8 = "";
for (row = 1; row <= d; row++) {
  for (col = 1; col <= d - row + 1; col++) {
    string8 += "*";
  }
  string8 += "\n";
}
console.log(string8);

let e = 5;
let string9 = "";
for (row = 1; row <= e; row++) {
  let space = row;
  for (s = 0; s <= row; s++) {
    string9 += " ";
  }
  for (col = 1; col <= e - row + 1; col++) {
    string9 += "* ";
  }
  string9 += "\n";
}
console.log(string9);

//qn:6//
var strings = ["something"];
console.log(strings.join(" "));

// Function to print the sorted array of string
function printArraystring(str, n) {
  for (let i = 0; i < n; i++) document.write(str[i] + " ");
}
//Ascending order//
let arr = ["GeeksforGeeks", "I", "from", "am"];
let n = arr.length;

// Function to perform sorting
Array(arr, n);
// Calling the function to print result
printArraystring(arr, n);
//Second laragest//
var myArray = ["40", "46", "796", "545", "416", "554"];
var secondLargest = myArray.sort(function (a, b) {
  return a - b;
})[myArray.length - 2];
alert(secondLargest);
//Remove duplicates from a JavaScript array
const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
console.log([...new Set(nums)]);

//single character//
function char_count(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

console.log(char_count("Chamber of secrets", "c"));
// Q:no:12 ,find the largest number//
function largestOfFour(arr) {
  // You can do this!
  var largest = [];
  var gr = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j <= arr[i].length; j++) {
      if (arr[i][j] > gr) {
        gr = arr[i][j];
      }
    }
    largest.push(gr);
  }
  return largest;
}

largestOfFour([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
var data = [
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
var maxArr = data.map(function (item) {
  return Math.max.apply(null, item);
});

document.write(maxArr);

let h = [20, 60, 30, 40, 10, 100];

let largestValue = n[0];

for (let i = 0; i < h.length; i++) {
  if (h[i] > largestValue) {
    largestValue = h[i];
  }
}
console.log(largestValue);

const array = [1, 2, 1, 2, 1, 4, 4, 4, 4];
result = [];

for (let i of arr) {
  flag = true;
  for (let j of result) {
    if (i === j) {
      flag = false;
      break;
    }
  }
  if (flag === true) {
    result.push(i);
  }
}
console.log(result, ":values");

function countOccurrences(arr, n, x) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (x == arr[i]) res++;
  }
  return res;
}

arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let a = arr.length;
let x = 2;
document.write(countOccurrences(arr, n, x));
