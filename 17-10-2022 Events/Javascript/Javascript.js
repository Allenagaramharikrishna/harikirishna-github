const btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click", function () {
  window.alert("button clicked");
});
const btn1 = document.querySelector(".btn1");
console.log(btn1);
btn1.addEventListener("dblclick", function () {
  window.alert("submit");
});
const btn2 = document.querySelector(".btn2");
console.log(btn1);
btn2.addEventListener("dblclick", function () {
  window.alert("17-10-2022");
});
const btn3 = document.querySelector(".btn3");
console.log(btn1);
btn3.addEventListener("dblclick", function () {
  window.alert("monday");
});
const btn4 = document.querySelector(".btn4");
console.log(btn1);
btn4.addEventListener("dblclick", function () {
  window.alert("1:30pm");
});
const hover = document.querySelector(".hover");

hover.addEventListener("mouseover", function () {
  hover.style.backgroundColor = "red";
});
hover.addEventListener("mouseleave", function () {
  hover.style.backgroundColor = "green";
});
const hover1 = document.querySelector(".hover1");
hover1.addEventListener("mouseover", function () {
  hover1.style.backgroundColor = "blue";
});
hover1.addEventListener("mouseleave", function () {
  hover1.style.backgroundColor = "green";
});
const hover2 = document.querySelector(".hover2");
hover2.addEventListener("mouseover", function () {
  hover2.style.backgroundColor = "yellow";
});
hover2.addEventListener("mouseleave", function () {
  hover2.style.backgroundColor = "green";
});
//form event
//on change
const firstname = document.getElementById("firstname");
console.log(firstname);
firstname.addEventListener("change", function () {
  console.log(firstname.value);
});
