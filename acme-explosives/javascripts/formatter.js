"use strict";

// Format the data

module.exports.formatData = data => {
  console.log("our data", data);
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

  let revisedProds = data[2].map(prod => {
    for (let prop in prod) {
      prod[prop].category = "new thing";
      prod[prop].type = "blowy up thing"; //data[1]   where prod[prop].type ===
    }
    return prod;
  });
  console.log("revised", revisedProds);
};
