var x = 12;
var y = 27;

function add(x, y) {
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  var sub = x - y;
  return sub;
}
var addition = add(x, y);

var subtraction = subtract(x, y);

console.log(addition);

console.log(subtraction);

function getAge(yearofBirth) {
  console.log(new Date().getFullYear() - yearofBirth);
}
getAge(2001);

var msg = "I will rule the world!";

function printMsg() {
  console.log(this.msg);
}

printMsg();
var msg = "I will rule the world!";
const Victor = {
  msg: "Victor will rule the world!",
  printMsg() {
    console.log(this.msg);
  },
};

Victor.printMsg();
var name = "Victor";

function first() {
  var a = "Hi!";
  second();
  console.log(`${a} ${name}`);
}

function second() {
  var b = "Hey!";
  third();
  console.log(`${b} ${name}`);
}

function third() {
  var c = "Hello!";
  console.log(`${c} ${name}`);
}

first();
