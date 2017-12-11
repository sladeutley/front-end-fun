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
