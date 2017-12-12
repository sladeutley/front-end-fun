(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";

module.exports.displayProducts = productsArr => {
  console.log("Some products", productsArr);
  productsArr.forEach( (product) => {
    // extra "$" on the prices is an actual dollar sign ( See the DOM output )
    let card = `<div class="prodCard ${product.season_discount}">
      <h2>${product.name}</h2>
      <h3>${product.category}</h3>
      <p class="price regPrice">Regular Price: $${product.price}</p>
      <p class="price discountPrice isHidden">Sale Price: $${product.discountPrice}</p>
    </div>`;
    let cardWrapper = document.createElement("div");
    cardWrapper.innerHTML = card;
    document.getElementById("products").appendChild(cardWrapper);
  });
};

},{}],3:[function(require,module,exports){
"use strict";
let dom = require("./DOMOutputter");
// take the data from the XHRs and format it so it can go into the DOM

// loop through products and categories and add the category name to each product item
module.exports.formatData = (catArr, prodArr) => {
  console.log("hello", catArr, prodArr);
  let prodsForDOM = prodArr.map(prod => {
    catArr.forEach(category => {
      if (prod.category_id === category.id) {
        prod.discountPrice = calcDiscount(prod.price, category.discount);
        prod.category = category.name;
        prod.season_discount = category.season_discount;

        // now that we've added another prop from categories to products. We can keep this as is
        // or... use the spread operator to merge the two objects instead!
        // NOTICE that both have a "name" key, so the one on the right 'wins'.
        // Its value is what will be assigned to the "name" prop.
        // BUT JSHint doesn't like it currently (12/17). Should be compatible with next update.
        //github.com/jshint/jshint/issues/2991
        // Still...Awfully cool syntax, huh?
        // prod = { ...category, ...prod };
      }
    });
    return prod;
  });
  console.log("prodsForDom", prodsForDOM);
  dom.displayProducts(prodsForDOM);
};

function calcDiscount(origPrice, discount) {
  // 1.0 - discount gives us the new price vs multiplying the origPrice by discount alone,
  // which would give us amount saved instead. toFixed sets the places after the decimal
  return +(origPrice * (1.0 - discount)).toFixed(2);
}

},{"./DOMOutputter":2}],4:[function(require,module,exports){
"use strict";
let formatter = require('./formatter');
require('./DOMInteraction');

// categories XHR
let categoryData = null;

const categoryReq = new XMLHttpRequest();
const parseCatData = () => {
  const catData = JSON.parse(event.target.responseText).categories;
  categoryData = catData;
  prodsReq.send();
};

categoryReq.addEventListener("load", parseCatData);
categoryReq.open("GET", "data/categories.json");
categoryReq.send();

// products XHR
const prodsReq = new XMLHttpRequest();
const parseProdData = () => {
  const prodData = JSON.parse(event.target.responseText).products;
  formatter.formatData(categoryData, prodData);
};

prodsReq.addEventListener("load", parseProdData);
prodsReq.open("GET", "data/products.json");

},{"./DOMInteraction":1,"./formatter":3}]},{},[4]);
