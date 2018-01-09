"use strict";

let $ = require("jquery");
const _startcase = require("lodash.startcase");

module.exports.displayFood = dogData => {
  // loop through 1st array
  dogData.forEach((brand, index) => {
    console.log(`brand${index}`, brand);
    let $dogFood = $("#dogFood");
    $dogFood.append(`<h3>${_startcase(brand.name)}</h3>`);

    // loop through each brand's types array
    brand.types.forEach(brandType => {
      $dogFood.append(`<h4>${_startcase(brandType.type)}</h4>`);

      // loop through the brandType's volumes array
      brandType.volumes.forEach(vol => {
        $dogFood.append(`<h5>Size: ${vol.name} Price: $${vol.price}</h5>`);
      });
    });
  });
};
