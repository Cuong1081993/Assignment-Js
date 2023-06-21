"use strict";

// neu user dang login

if (userActive) {
  const todoList = document.getElementById("todo-list");
  const btnAdd = document.getElementById("btn-add");
  const inputTask = document.getElementById("input-task");

  displayTodoList();

  // ham hien thi todolist
  function displayTodoList() {
    // tim kiem nhung user dang login de loc ra todotask cua user
    let html = "";
    todoArr
      .filter((todo) => todo.owner === userActive.username)
      .forEach(function (todo) {
        html += `
            <li class=${todo.isDone ? "checked" : ""}> ${todo.task}
            <span class="close">X</span></li>
            `;
      });

    todoList.innerHTML = html;

    eventToggleTasks();
    eventDeleteTasks();
  }

  btnAdd.addEventListener("click", function () {
    if (inputTask.value.trim().length === 0) {
      alert("Please input to do list !");
    } else {
      const todo = new Task(inputTask.value, userActive.username, false);

      // them task moi vao todoArr
      todoArr.push(todo);

      // luu xuong storage
      saveToStorage("todoArr", todoArr);

      // hien thi cac todolist
      displayTodoList();
      // reset form input
      inputTask.value = "";
    }
  });

  function eventToggleTasks() {
    // lay cac phan tu li chua cac task
    document.querySelectorAll("#todo-list li").forEach(function (liEl) {
      liEl.addEventListener("click", function (e) {
        //loai bo nut delete de k bi double su kien khi chay ham delete
        if (e.target !== liEl.children[0]) {
          //toggle class checked
          liEl.classList.toggle("checked");
          // tim task vua kick vao (toggle)

          const todo = todoArr.find(
            (todoItem) =>
              todoItem.owner === userActive.username &&
              todoItem.task === liEl.textContent.slice(0, -1)
          );
          // thay doi thuoc tinh isDone
          todo.isDone = liEl.classList.contains("checked") ? true : false;

          // luu lai storage
          saveToStorage("todoArr", todoArr);
        }
      });
    });
  }

  function eventDeleteTasks() {
    document.querySelectorAll("#todo-list .close").forEach(function (closeEl) {
      closeEl.addEventListener("click", function () {
        // confirm delete
        const isDelete = confirm("Are you sure to delete ?");

        if (isDelete) {
          // tim vi tri cua task dc an nut delete

          const index = todoArr.findIndex(
            (item) =>
              item.owner === userActive.username &&
              item.task === closeEl.parentElement.textContent.slice(0, -1)
          );
          // xoa task khoi mang todoArr
          todoArr.splice(index, 1);
          // luu xuong storage
          saveToStorage("todoArr", todoArr);

          // hien thi lai todolist
          displayTodoList();
        }
      });
    });
  }
} else {
  alert("Please login or register to use To Do List !");
  window.location.assign("../index.html");
}
