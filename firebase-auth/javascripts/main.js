"use strict";

const fbURL = "https://c23-fb-demo.firebaseio.com";
const $ = require("jquery");
const firebase = require("./config/fb-config");
const auth = require("./user-factory");
// let user = null;

// firebase data module
function getTodos(uid) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://c23-fb-demo.firebaseio.com/todos.json?orderBy="uid"&equalTo="${uid}"`
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

// end of FB data module

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
      <button id="${todo.id}" class="deleteTodo">delete</button>`
    );
  });
}

function displayTodos(uid) {
  getTodos(uid).then(todoData => {
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
  let currentUser = firebase.auth().currentUser;
  console.log("current User", currentUser);

  let todoObj = {
    task: $("#todoTask").val(),
    description: $("#todoDesc").val(),
    uid: currentUser.uid
  };
  addTodo(todoObj).then(() => {
    displayTodos();
  });
});

// kick it all off
// displayTodos();

// setTimeout(() => {
//   console.log("Who is our user?", firebase.auth().currentUser);
// }, 1000);

firebase.auth().onAuthStateChanged(() => {
  console.log("Who is our user?", firebase.auth().currentUser);
});

$("#auth-btn").click(() => {
  auth
    .authUser()
    .then(function(result) {
      // The signed-in user info.
      let user = result.user;
      console.log("user", user);
      displayTodos(user.uid);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
});

$("#signout-btn").click( () => {
  auth.logout()
  .then( () => {
    console.log('logged out!', firebase.auth().currentUser);

  });
});
