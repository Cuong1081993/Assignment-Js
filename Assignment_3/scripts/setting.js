"use strict";

if (userActive) {
  const inputPageSize = document.getElementById("input-page-size");
  const inputCategory = document.getElementById("input-category");
  const btnSubmit = document.getElementById("btn-submit");

  btnSubmit.addEventListener("click", function () {
    if (validate) {
      //cap nhat lai user active
      userActive.pageSize = Number.parseInt(inputPageSize.value);
      userActive.category = inputCategory.value;
      // luu lai storage
      saveToStorage("userActive", userActive);

      // cap nhap lai user arr
      const index = userArr.findIndex(
        (userItem) => userItem.username === userActive.username
      );
      userArr[index] = userActive;
      saveToStorage("userArr", userArr);
      // reset form input va thong bao thanh cong
      alert("Setting successful !");
      inputPageSize.value = "";
      inputCategory.value = "General";
    }
  });

  function validate(){
    let isValidate = true;

    if(Number.isNaN(Number.parseInt(inputPageSize.value))){
        alert("Page set not allow !")
        isValidate = false;
    }
    return isValidate;
  }
}else{
    alert("Please login or register to use setting ! ");
    window.location.assign("../index.html")
}
