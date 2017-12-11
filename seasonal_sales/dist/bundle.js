(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// take the data from the XHRs and format it so it can go into the DOM

// loop through products and categories and add the category name to each product item
module.exports.formatData = (catArr, prodArr) => {
  console.log("hello", catArr, prodArr );
  let prodsForDOM = prodArr.map( (prod) => {
    catArr.forEach( (category) => {
      if(prod.category_id === category.id)
        prod.category = category.name;
    });
    return prod;
  });
  console.log('prodsForDom', prodsForDOM);
};


},{}],2:[function(require,module,exports){
"use strict";
let formatter = require('./formatter');

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

},{"./formatter":1}]},{},[2]);
