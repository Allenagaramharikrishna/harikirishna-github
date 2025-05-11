// program to remove duplicate value from an array

function getUnique(arr) {
  let uniqueArr = [];

  // loop through array
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);

function reverse(array) {
  var output = [];
  for (var i = 0; i <= array.length; i++) {
    output.push(array.pop());
  }
  return output;
}

// program to generate fibonacci series up to n terms

// take input from the user
const number = parseInt(prompt("Enter the number of terms: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

//JavaScript program to swap two variables

//take input from the users
let a = prompt("Enter the first variable: ");
let b = prompt("Enter the second variable: ");

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// program to make first letter capital in every word of a string?

let m = "how are you today? Where are you going?";
let newM = m.split(" ");
// console.log(newM);
let word = [];
for (let i = 0; i < newM.length; i++) {
  // console.log(newM[i]);
  let firstLetter = newM[i].substring(0, 1);
  firstLetter = firstLetter.toUpperCase();
  // console.log(firstLetter);
  let restLetters = newM[i].substring(1); //substring(1, length)
  // console.log(restLetters)
  word.push(firstLetter + restLetters);
}
console.log(word);

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");

  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr.length[i] < splitStr.length) {
      splitStr[i].charAt(0).tolowerCase();
    }

    str = splitStr.join(" ");
  }

  return str;
}

console.log(titleCase("abc", "def", "ghi", "jkl"));

// Write a code to reverse a string without using methods

let string = "how was the day";
let newString = "";
for (var i = string.length - 1; i >= 0; i--) {
  // for (let i=0; i<string.length; i++) {
  newString += string[i];
}
console.log(newString);

// Write a code to capitalize every first letter in an array?

let ar = ["abc", "def", "ghi", "jkl"];
let newAr = [];
let length = ar.length;
for (let i = 0; i < length; i++) {
  // console.log(ar[i]);
  let firstLetter = ar[i].substring(0, 1);
  firstLetter = firstLetter.toUpperCase();
  // console.log(firstLetter);
  let restLetters = ar[i].substring(1); //substring(1, length)
  let word = firstLetter + restLetters;
  newAr.push(word);
}

console.log(ar);
console.log(newAr);

console.log("--------------------");

// Write a code to find highest and lowest value in an array using for loops?

let arr = [26, 9, -15, 0, 20, -130, 80, 412, 145, 69];
let min = arr[1]; //here we are taking one element to compare with other elements
let max = arr[0];
len = arr.length;

for (var i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
  // min;
  // max;
}

console.log("maximum Value in the array : ", max);
console.log("minimum Value in the array : ", min);

console.log("------------------------");
