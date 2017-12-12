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
