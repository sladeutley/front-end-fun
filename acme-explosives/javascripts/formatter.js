"use strict";

// Format the data
// Untangle the array of arrays and make the data ready to present to the user

// Mutate the products array:
//   Add "category" key to each item
//   Change "type" val from integer to string value, ie "fragmentation"
// From this:
// "fairy_sparklers": {
//       "id": 0,
//       "type": 0,
//       "name": "Fairy Sparklers",
//       "description": "Multi-colored sparklers that are safe for any age."
//     }

//     To this:
// "fairy_sparklers": {
//       "id": 0,
//       "type": "personal",
//       "name": "Fairy Sparklers",
//       "description": "Multi-colored sparklers that are safe for any age.",
//       category: "fireworks"
//     }

module.exports.formatData = data => {
  console.log("our data", data);

  const products = data[2];
  const types = data[1];
  const cats = data[0];

  let revisedProds = products.map(prod => {
    let currentProd = Object.keys(prod);
    console.log(currentProd);
    let prodType = types.find(type => type.id === prod[currentProd].type );
    console.log('prodType', prodType);
    let prodCat = cats.find( category => category.id === prodType.category);

    prod[currentProd].type = prodType.name;
    prod[currentProd].category = prodCat.name;

    return prod;
  });
  console.log("revised", revisedProds);
  return revisedProds;
};
