let main = document.getElementById("button");

const form = document.getElementById("form");

const fullName = document.getElementById("fullName");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const details = document.getElementById("details");

const passed = document.getElementById("passed");

const present = document.getElementById("present");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validation();
});

const validation = function () {
  if (fullName.value === "") {
    nameErr.innerText = "Enter a valid Name";
    nameErr.style.color = "red";
    fullName.style.border = " 1px solid red";
  } else {
    nameErr.style.display = "none";
    fullName.style.border = "1px solid green";
  }
  if (
    email.value === "" ||
    email.value.indexOf("@") === -1 ||
    email.value.includes("in" || "com")
  ) {
    emailErr.style.display = "block";
    emailErr.innerText = "Enter a valid Email";
    emailErr.style.color = "red";
    email.style.border = "1px solid red";
  } else {
    emailErr.style.display = "none";
    email.style.border = "1px solid green";
  }
  if (phone.value === "") {
    phoneErr.innerText = "Enter a valid Number";
    phoneErr.style.color = "red";
    phone.style.border = "1px solid red";
  } else {
    phoneErr.style.display = "none";
    phone.style.border = "1px solid green";
  }
  if (details.value === "--select--") {
    detailsErr.innerText = "select a chose";
    detailsErr.style.color = "red";
    details.style.border = "1px solid red";
  } else {
    detailsErr.style.display = "none";
    details.style.border = "1px solid green";
  }
  if (passed.value === "--select--") {
    passedErr.innerText = "select a chose";
    passedErr.style.color = "red";
    passed.style.border = "1px solid red";
  } else {
    passedErr.style.display = "none";
    passed.style.border = "1px solid green";
  }
  if (present.value === "--select--") {
    presentErr.innerText = "select a chose";
    presentErr.style.color = "red";
    present.style.border = "1px solid red";
  } else {
    presentErr.style.display = "none";
    present.style.border = "1px solid green";
  }
};
