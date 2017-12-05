'use strict';
let events = require('./events');

// DOM Population stuff
const populatePage = inventory => {
  // Grab the div we want to apppend the cards to
  const cards = document.getElementById("inventory-cards");

  // Loop over the inventory and populate the page
  inventory.forEach(function(car, index) {
    let carCard = buildCard(car, index);
    let cardDiv = document.createElement("div");
    cardDiv.innerHTML = carCard;
    cards.appendChild(cardDiv);
  });

  // Now that the DOM is loaded, establish all the other event listeners needed
  events();
};

const buildCard = (car, index) => {
  // Build a string that creates a single card
  var card = "",
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

module.exports = { populatePage };
