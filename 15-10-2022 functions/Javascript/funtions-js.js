//recusive functins
//a functin which calls itself agian and agian until it is terminated

let count = 0;
function recusive() {
  count++;
  console.log(count);
  if (count < 50) {
    recusive();
  }
}
recusive();

function y() {
  console.log("hi this is y");
}
x(y);

//nested function
//function inside the function

function outer() {
  function inner() {
    console.log("inner one");
  }
  inner();
}
outer();

//call back function
//it is a function that is pass an argument to another function

function x(val) {
  console.log(val);
  val();
}
