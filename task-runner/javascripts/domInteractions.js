"use strict";
const userInput = document.getElementById("editInput");

// DOM interaction stuff
const highlightCard = event => {
  // grab all the "is-clicked" elements and remove the class
  // before adding it to the latest clicked card
  const carCards = document.getElementsByClassName("is-clicked");
  if (carCards.length > 0) {
    for (var i = 0; i < carCards.length; i++) {
      carCards[i].classList.remove("is-clicked");
    }
  }
  // ".closest" find the nearest ancestor.
  var card = event.target.closest(".card-wrapper");
  userInput.focus();
  userInput.value = "";
  // toggle the "is-clicked" class to change border and backgd in CSS
  card.classList.add("is-clicked");
};

const editCard = event => {
  const card = document.getElementsByClassName("is-clicked")[0];
  const description = card.lastChild;

  description.innerHTML = userInput.value;
};

module.exports = { editCard, highlightCard };
