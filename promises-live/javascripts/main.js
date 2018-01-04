"use strict";

console.log("Promises rock");

const $ = require("jquery");
const userFactory = require("./userFactory");
const faveFactory = require("./faveFactory");
const domStuff = require('./domStuff');

$("select").change(function() {
  let selectedUser = $(this).val();
  userFactory.getUsers(selectedUser)
  .then(userData => {
    return faveFactory.getFaves(userData);
  })
  .then( (songs) => {
    domStuff.listFaves(songs);
  });
});
