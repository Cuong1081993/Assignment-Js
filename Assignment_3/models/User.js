"use strict";

class User {
  constructor(
    fistName,
    lastName,
    username,
    password,
    pageSize = 5,
    category = "business"
  ) {
    this.firstname = fistName;
    this.lastname = lastName;
    this.username = username;
    this.password = password;
    this.pageSize = pageSize;
    this.category = category;
  }
}

class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
