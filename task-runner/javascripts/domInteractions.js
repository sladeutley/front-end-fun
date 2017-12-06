"use strict";
const userInput = document.getElementById("editInput");
const contactBtn = document.getElementById("contactBtn");

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

const handleBtn = () => {
  // Holy Cow, what is this? Look up "make an array with spread operator", and hold onto your brain
  let content = [...document.getElementById("content").children];
  content.forEach( (child) => {
    child.classList.toggle("is-hidden");
  });
  contactBtn.innerHTML = contactBtn.innerText.includes("contact") ? "back to cars" : "contact us";
};

module.exports = { editCard, highlightCard, handleBtn };
