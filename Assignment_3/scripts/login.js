"use strict";

const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");

// bat su kien click vao nut login

btnSubmit.addEventListener("click", function () {
  const isValidate = validate();

  if (isValidate) {
    const user = userArr.find(
      (item) =>
        item.username === inputUserName.value &&
        item.password === inputPassword.value
    );
    if (user) {
      alert("Login Successfully !");
      // luu user dang nhap vao mang
      saveToStorage("userActive", user);
      // chuyen huong ve trang chu
      window.location.assign("../index.html");
    }else{
        alert("Login fail, please check again !");
    }
  }
});

function validate(){
    let isValidate = true;
    if(inputUserName.value===""){
        alert("Please input user name");
        isValidate = false;
    }
    if(inputPassword.value===""){
        alert("Please input password");
        isValidate = false;
    }
    return isValidate;
}
