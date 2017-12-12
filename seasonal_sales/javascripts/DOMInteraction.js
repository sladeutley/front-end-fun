"use strict";

let selector = document.getElementById("seasonSelector");

selector.addEventListener("change", applyDiscount);

function applyDiscount() {
  let discountClass = event.target.value;

  // Grab ALL the products' discount prices and add the "isHidden" class to all of them to hide any previously shown discounts, before we turn around and remove it from the product prices associated with the currently-selected season.
  // Also have to remove isHidden from any previously hidden regular prices
  // Here we're turning the HTMLCollections created by getElementsByClassName into arrays by wrapping in square brackets and using the spread operator to make each item in the HTMLCollection an element in the new array
  [...document.getElementsByClassName("regPrice")].forEach(element => {
    // If the class is not there, this has no effect
    element.classList.remove("isHidden");
  });

  // If Summer is selected, discountClass will be undefined, since no elements will have that class
  if (discountClass) {
    [...document.getElementsByClassName("discountPrice")].forEach(element => {
      // If the class is already there, this has no effect
      element.classList.add("isHidden");
    });

    [...document.getElementsByClassName(discountClass)].forEach(element => {
      [...element.getElementsByClassName("price")].forEach(price => {
        price.classList.toggle("isHidden");
      });
    });
  }
}
