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
