"use strict";

const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");

// su kien bam vao nut register

btnSubmit.addEventListener("click", function () {
  // lay du lieu input

  const user = new User(
    inputFirstName.value,
    inputLastName.value,
    inputUserName.value,
    inputPassword.value
  );

  //check valite du lieu input

  const isValidate = validate(user);

  if (isValidate) {
    // neu khong co loi thi push user vao mang userArr
    userArr.push(user);
    // luu user xuong  localstorage
    saveToStorage("userArr", userArr);

    alert("Register Successfully ! ");

    window.location.assign("../pages/login.html");
  }
});

function validate(user) {
  let isValidate = true;
  if (user.firstname.trim().length === 0) {
    alert("Please input fist name !");
    isValidate = false;
  }
  if (user.lastname.trim().length === 0) {
    alert("Please input last name !");
    isValidate = false;
  }
  if (user.username.trim().length === 0) {
    alert("Please input user name !");
    isValidate = false;
  }
  if (user.password === "") {
    alert("Please input password  !");
    isValidate = false;
  }
  if (inputPasswordConfirm.value === "") {
    alert("Please input confirm password !");
    isValidate = false;
  }

  // kiem tra user co trung lap khong

  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].username === user.username) {
      alert("User name is exist !");
      isValidate = false;
      break;
    }
  }
  // check password va confirm password
  if (user.password !== inputPasswordConfirm.value) {
    alert("Confirm password does not match with password !");
    isValidate = false;
  }
  if (user.password.length <= 8) {
    alert("Password must have at least 8 characters !");
    isValidate = false;
  }
  return isValidate;
}
