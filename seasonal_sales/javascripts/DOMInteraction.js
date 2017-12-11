"use strict";

let selector = document
  .getElementById("seasonSelector");

selector.addEventListener("change", applyDiscount);

function applyDiscount() {
  console.log("WTF?");
  console.log(event.target.value);
  // data we need
  // seasonal discount percentage
  // prices
  // which products will update prices

  // what to do
  // change prices where needed
}
