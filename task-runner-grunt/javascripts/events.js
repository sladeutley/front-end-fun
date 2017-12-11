"use strict";

const dom = require('./domInteractions');

const cardWrapper = document.getElementById("inventory-cards");
const input = document.getElementById("editInput");
const contactBtn = document.getElementById("contactBtn");

const throwError = () => {
  window.alert("Please click on a card to begin editing");
};

const activateEvents = () => {
  console.log('events called');

  contactBtn.addEventListener("click", dom.handleBtn);
  cardWrapper.addEventListener("click", dom.highlightCard);
  input.addEventListener("keyup", function() {
    console.log("Just checking");
    if (event.keyCode === 13) {
      console.log("Enter hit");
      input.value = "";
      return;
    }

    const highlighted = document.getElementsByClassName("is-clicked");
    if (highlighted.length === 0) {
      throwError();
    } else {
      dom.editCard(event);
    }
  });
};

module.exports = activateEvents;
