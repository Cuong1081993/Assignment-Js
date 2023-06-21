"use strict";

// lay du lieu
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

//luu du lieu

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// lay du lieu userArr tu localStorage
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];

// chuyen ve class Instance
const userArr = users.map((user) => parseUser(user));

// lay du lieu user dang login
let userActive = getFromStorage("userActive")
  ? parseUser(getFromStorage("userActive"))
  : null;


  // lay du lieu todoArr tu localstorage
  const todos = getFromStorage("todoArr") ? getFromStorage("todoArr"):[];

  // chuyen ve todo class instance
const todoArr = todos.map((todo)=> parseTask(todo));
  
// chuyen tu Js Object sang Class Instance
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password,
    userData.pageSize,
    userData.category
  );
  return user;
}

function parseTask(taskData){
  const task = new Task(taskData.task,taskData.owner, taskData.isDone);
  return task;
}
