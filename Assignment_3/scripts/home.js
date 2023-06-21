"use strict";

const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");

const welcomeMessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");

displayHome();
function displayHome() {
  if (userActive) {
    loginModal.style.display = "none";
    mainContent.style.display = "block";

    welcomeMessage.textContent = `Welcome ${userActive.firstname}`;
    console.log(userActive);
  } else {
    loginModal.style.display = "block";
    mainContent.style.display = "none";
  }
}

// su kien nut log out

btnLogout.addEventListener("click",function(){
    const isLogOut = confirm("Are you sure ? ");

    if(isLogOut){
        // gan userActive = null de khong co ai dang login
        userActive = null;

        // luu lai trong storage
        saveToStorage("userActive",userActive);

        displayHome();
    }
})
