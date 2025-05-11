for (let i = 0; i < 5; i++) {
  console.log("loop" + i);
  if (i === 2) break;
}

const names = ["hari", "akhil", "mahesh", "pandu"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const string = ["hari", "akhil", "mahesh", "pandu"];
const user = { firstName: "hari", lastNmae: "pandu" };
for (key in user) console.log(user[key]);

let i = 1;
while (i < 10) {
  console.log(i);
  i++;
  if (i === 4) continue;
}

var myArray = [];
for (var a = 1; a < 10; a++) {
  myArray.push(a);
}
console.log(myArray);

for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//odd numbers//
for (i = 0; i <= 15; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
  console.log(`I love JavaScript.`);
}

// program to display numbers from 1 to 5
const m = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
  console.log(i);
}

// program to display the sum of natural numbers
let sum = 0;
const c = 100;

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
  sum += i; // sum = sum + i
}

console.log("sum:", sum);

let num = 1;
const d = 200;
for (let i = 1; i <= n; i++) {
  num += i;
}
console.log("num", num);

function greet() {
  console.log("Hello world!");
}
greet();

// program to add two numbers using a function
// declaring a function
function add(a, b) {
  console.log(a + b);
}
add(5, 4);
add(2, 9);

// program to sub two numbers using a function
// declaring a function//
function sub(a, b) {
  console.log(a - b);
}
sub(19, 7);
sub(99, 76);
