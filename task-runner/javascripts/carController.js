"use strict";
const contactForm = document.getElementById("contact");
const cards = document.getElementById("inventory-cards");

// DOM Population stuff
const showInventory = (inventory, callback) => {
  // Loop over the inventory and populate the page
  inventory.forEach(function(car, index) {
    let carCard = buildCard(car, index);
    let cardDiv = document.createElement("div");
    cardDiv.innerHTML = carCard;
    cards.appendChild(cardDiv);
  });

  // Now that the DOM is loaded, establish all the other event listeners needed ('callback' will be activateEvents method)
  callback();
};

const buildCard = (car, index) => {
  // Build a string that creates a single card
  let card = "",
    card_wrapper = `<section id="card--${
      index
    }" class="card-wrapper" style="border: 2px solid ${car.color}">`,
    card_title = `<h3>${car.year} ${car.make} ${car.model}</h3>`,
    card_price = `<div class="car-price">$${car.price}</div>`,
    card_image = `<div class="card-img" style="background-image: url('images/${
      car.image
    }')"></div>`,
    card_sold = car.purchased ? `<span class="card-sold">SOLD!</span>` : "",
    card_copy = `<p class="card-copy">${car.description}</p>`;

  // Concatenate our completed card markup
  card += `${card_wrapper +
    card_title +
    card_price +
    card_image +
    card_sold +
    card_copy}</section>`;
  return card;
};

const showContactForm = () => {
  let form = `<div class="form-wrapper">
    <form>
      <div class="form-group">
        <label for="formEmail">Email address</label>
        <input type="email" class="form-control" id="formEmail1" placeholder="you@you.com">
      </div>
      <div class="form-group">
        <label for="formName">Your Name</label>
        <input type="text" class="form-control" id="formName" placeholder="first and last">
      </div>
      <div class="form-group">
        <label for="formComments">Your Comments</label>
        <textarea rows="3" id="formComments"></textarea>
      </div>
    </form>
    <button class="btn btn-primary">Submit</button>
  </div>`;
  let formWrapper = document.createElement("div");
  formWrapper.innerHTML = form;
  contactForm.appendChild(formWrapper);
};

module.exports = { showInventory, showContactForm };
