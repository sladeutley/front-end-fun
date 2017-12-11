(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";

module.exports.displayProducts = productsArr => {
  console.log("Some products", productsArr);
  productsArr.forEach( (product) => {
    let card = `<div class="prodCard">
      <h2>${product.name}</h2>
      <h3>${product.category}</h3>
      <p>${product.price}</p>
      <p class="isHidden">${product.discountPrice}</p>
    </div>`;
    let cardWrapper = document.createElement("div");
    cardWrapper.innerHTML = card;
    document.getElementById("products").appendChild(cardWrapper);
  });
};

},{}],3:[function(require,module,exports){
"use strict";
let dom = require('./DOMOutputter');
// take the data from the XHRs and format it so it can go into the DOM

// loop through products and categories and add the category name to each product item
module.exports.formatData = (catArr, prodArr) => {
  console.log("hello", catArr, prodArr);
  let prodsForDOM = prodArr.map(prod => {
    catArr.forEach(category => {
      if (prod.category_id === category.id) {
        prod.category = category.name;
        prod.discountPrice = "" ;//somethin mathy
      }
    });
    return prod;
  });
  console.log("prodsForDom", prodsForDOM);
  dom.displayProducts(prodsForDOM);
};

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
