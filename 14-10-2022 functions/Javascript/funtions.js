//sort array//

var arr = [2, 5, 8, 1, 4];
document.write(
  arr.sort(function (a, b) {
    return a + 2 * b;
  })
);
document.write(arr);

//remove duplicate//

let numbers = [20, 5.2, -120, 100, 30, 0];
console.log(numbers.sort());

const names = ["John", "Paul", "George", "Ringo", "John"];

let unique = [...new Set(names)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo'

//return month//
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = year + "/" + month + "/" + day;

//max and min//

var arr = [70, 20, 12, 78, 59, 46, 759, , 1, 9, 75, 25, 2, 4, 24];

var max = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] >= max) {
    max = arr[i];
    console.log("setting max to" + max);
  }
}

console.log(max);

var min = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] <= min) {
    min = arr[i];
    console.log("setting max to" + min);
  }
}

console.log(min);

//function expression//

const myfunction = function () {
  alert("I am a functoin expreesion");
};
console.log(myfunction);

const math = {
  factit: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factit(3); //3;2;1;

//function return//
function calcSales(unitsA, unitsB, unitsC) {
  let result = `hi ${unitsA}  ${unitsB} ${unitsC}`;
  return result;
}
console.log(calcSales(55, 27, 92));

// program to print a text
// declaring a function
function greet() {
  console.log("Hello there!");
}

// calling the function
greet();

// program to print the text
// declaring a function
function greet(name) {
  console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: hari ");

// calling function
greet(name);
