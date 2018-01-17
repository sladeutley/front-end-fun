"use strict";

const fbURL = "https://c23-fb-demo.firebaseio.com";

// firebase module
function getTodos() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://c23-fb-demo.firebaseio.com/todos.json"
    })
      .done(todos => {
        resolve(todos);
      })
      .fail(error => {
        console.log("uh-oh", error.statusText);
        reject(error);
      });
  });
}

function deleteTodo(id) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://c23-fb-demo.firebaseio.com/todos/${id}.json`,
      method: "DELETE"
    })
      .done(data => {
        resolve(data);
      })
      .fail(error => {
        console.log("uh-oh", error.statusText);
        reject(error);
      });
  });
}

function addTodo(newTodo) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${fbURL}/todos.json`,
      method: "POST",
      data: JSON.stringify(newTodo)
    }).done(todoId => {
      console.log(todoId);
      resolve();
    });
  });
}

// end of FB module

function listTodos(todoData) {
  console.log("todos", todoData);
  let todoArr = [];
  let keys = Object.keys(todoData);
  keys.forEach(key => {
    todoData[key].id = key;
    todoArr.push(todoData[key]);
  });
  console.log(todoArr);
  $("#todos").html("");
  todoArr.forEach(todo => {
    $("#todos").append(
      `<h5>${todo.task}</h3>
      <p>${todo.description}</p>
      <button id="${
        todo.id
      }" class="deleteTodo">delete</button>`
    );
  });
}

function displayTodos() {
  getTodos().then(todoData => {
    listTodos(todoData);
  });
}

$(document).on("click", ".deleteTodo", function() {
  let todoId = $(this).attr("id");
  console.log("Id", todoId);
  deleteTodo(todoId)
    .then(() => {
      alert("Todo deleted");
      return getTodos();
    })
    .then(todos => {
      listTodos(todos);
    })
    .catch(err => {
      console.log("oops", err);
    });
});

$("#addTodo").click(function() {
  console.log("addTodo called");

  let todoObj = {
    task: $("#todoTask").val(),
    description: $("#todoDesc").val(),
    uid: null
  };
  addTodo(todoObj)
  .then( () => {
    displayTodos();
  });
});

// kick it all off
displayTodos();
