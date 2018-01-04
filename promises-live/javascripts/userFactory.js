"use strict";

const $ = require("jquery");

module.exports.getUsers = selectedUser => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "data/users.json"
    }).done(userData => {
      let usersArr = userData.users;
      let selectedUserData = usersArr.filter(user => {
        return user.name === selectedUser;
      })[0];
      console.log(selectedUserData);
      resolve(selectedUserData);
    });
  });
};
