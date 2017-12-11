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
