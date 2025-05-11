//includes//

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false

//join//

const cssClasses = ["btn", "btn-primary", "btn-active"];
const btnClass = cssClasses.join(" ");

console.log(btnClass);

//indexof//

let str = "finding substring in string";
let index = str.indexOf("str");

console.log(index);

//lastindexof//
// defining a string
var string = "Programming";

var substr = "g";

// find last occurrence of "g" in str
var result = str.lastIndexOf(substr);

console.log(result);

//concat//
console.log("".concat({})); // [object Object]
console.log("".concat(null)); // null
console.log("".concat(true)); // true
console.log("".concat(4, 5)); // 45

let str1 = "Hello";
let str2 = "World";

// concatenating two strings
let newStr = str1.concat(", ", str2, "!");
console.log(newStr); // Hello, World!

//sort//
let city = ["California", "Barcelona", "Paris", "Kathmandu"];

// sort the city array in ascending order
let sortedArray = city.sort();
console.log(sortedArray);

// Output: [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]

//Reverse//
// program to reverse a string

function reverseString(str) {
  // empty string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

//reverse//

let numbers = [1, 2, 3, 4, 5];

// reversing the numbers array
let reversedArray = numbers.reverse();

console.log(reversedArray);

// Output: [ 5, 4, 3, 2, 1 ]

//length//

// defining a string
let sentence = "I love Programiz.";

// returns number of characters in the sentence string
let len = sentence.length;

console.log(len);

// Output:
// 17

//includes//

let substring = "JavaScript String";
console.log(str.includes("Script"));

//indexof//
let newString = "JS indexOf";
let substrings = "js";

let indexof = str.indexOf(substr);

console.log(index); // -1

//slice//
const st = "Hello";
const substri = str.slice();

console.log({ substr });

//chartat//
const hari = "hello world";
console.log(str.charAt(3));

//spilt//
const str3 = "hello 10000 coders";
console.log(str.split());
console.log(str.split(""));

//tolowercase//
const str4 = "Hello world";
console.log(str.toUpperCase());
