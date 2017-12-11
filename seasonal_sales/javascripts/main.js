"use strict";

// categories XHR
const categoryReq = new XMLHttpRequest();
const parseCatData = () => {
  const data = JSON.parse(event.target.responseText).categories;
  // formatData(data);
  console.log("Cat data", data);
};

categoryReq.addEventListener("load", parseCatData);
categoryReq.open("GET", "data/categories.json");
categoryReq.send();

// products XHR
const prodsReq = new XMLHttpRequest();
const parseProdData = () => {
  const data = JSON.parse(event.target.responseText).products;
  // formatData(data);
  console.log("prod data", data);
};

prodsReq.addEventListener("load", parseProdData);
prodsReq.open("GET", "data/products.json");
prodsReq.send();
