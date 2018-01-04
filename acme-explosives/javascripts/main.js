"use strict";

// UI interface w/dropdown
// Grab the selected value



// Display the appropriate data to the user

console.log("Acme Explosives");

const $ = require("jquery");
const factory = require("./factory");
const formatter = require('./formatter');

const acmeData = [];

// factory
//   .getCategories()
//   .then(categories => {
//     console.log(categories);
//     acmeData.push(categories);
//     return factory.getTypes();
//   })
//   .then(types => {
//     console.log(types);
//     acmeData.push(types);
//     return factory.getProducts();
//   })
//   .then(products => {
//     console.log(products);
//     acmeData.push(products);
//     console.log(acmeData);
//     // Send the data to a method
//   })
//   .catch(err => {
//     // console.log(err);
//     console.log(`There was a problem: ${err.status} ${err.statusText}`);
//   });

let promArr = [
  factory.getCategories(),
  factory.getTypes(),
  factory.getProducts()
];
Promise.all(promArr)
.then( (dataArr) => {
  formatter.formatData(dataArr);
})
.catch( (err) => {
  console.log(err);
});
