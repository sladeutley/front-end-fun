// var bookInfo = {
//   price: "24.99",
//   title: "Harry Potter Does Stuff",
//   image: "/book.jpg"
// };

// document.getElementById("book-price").innerHTML = bookInfo.price;

// var button = document.getElementById("btn");
// btn.addEventListener("click", function() {
//   document.getElementById("cart").className -= "is-hidden";
//   document.getElementById("cart-price").innerHTML = bookInfo.price;
// });

let outside = "global";

function scopeStuff() {
  let inside = "local";
  console.log("outside from inside func", outside);
  return inside;
}

let theValueIWant = scopeStuff();
console.log("the val I want", theValueIWant);

// console.log("outside global", outside);
// console.log("inside global?", inside);

{
  let inside = "Block Scope";
}
// console.log("inside block scope", inside);
