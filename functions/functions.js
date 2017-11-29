// console.log("functions fun");

// // sayHello();
// // sayHowdy(); //will not work because hoisting

// // function expression
// const sayHowdy = function() {
//   console.log("Howdy");
// };

// // sayGreeting();

// let state = "arriving";

// // function declaration
// function sayHello() {
//   console.log("Hello, I'm a function");
// }

// function sayGoodby() {
//   console.log("Seeya");
// }

// function sayGreeting() {
//   if (state === "arriving") {
//     sayHello();
//   } else {
//     sayGoodbye();
//   }
// }

// let sum = "some number";
// // Functions that calculate a value for us
// function addStuff() {
//   let sum = 2 + 2;
//   return sum;
// }

// function addMoreStuff() {
//   let sum = 4 + 5;
//   return sum;
// }

// let result = addStuff();
// let otherResult = addMoreStuff();
// console.log("big Stuff", result + otherResult);

// // console.log("sum", sum);

// // Arguments
// function add(num, num2) {
//   let sum = num + num2;
//   return sum;
// }

// let result3 = add(3, 5);
// let otherResult3 = add(4, 5678);

// function logAnything(thing) {
//   console.log("anything", thing);
// }

// // You can pass anything into a function as an argument
// acceptAnything(2);
// acceptAnything("Hello");
// acceptAnything(true);
// acceptAnything(3.567);
// acceptAnything(["hello", "wtf", 5]);
// acceptAnything({ height: 4, char: "*" });

// // You can pass a function into another function then
// // execute the function you passed in
// function acceptAnything(thing) {
//   console.log("is this what I think it is?", thing()); //executing blowMinds
// }

// function blowMinds() {
//   return "Oh, no. What is he doing?";
// }

// // Note: We are passing a REFERENCE to blowMinds here, not executing it
// acceptAnything(blowMinds);

// let's build a calculator
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calcModulo(num1, num2) {
  return num1 % num2;
}

// Call this instead of directly calling the math functions defined above. This creates an abstraction, where we don't have to call the math functions directly. We just tell "calculate" to do it for us
function calculate(num1, num2, func) {
  return func(num1, num2);
}

let num1Input = document.getElementById("number");
let num2Input = document.getElementById("number2");

function printToDOM(value) {
  document.getElementById("output").innerHTML = value;
}

// Event Listeners
document.getElementById("addStuff").addEventListener("click", function() {
  console.log("The add btn got clicked", num1Input.value, num2Input.value);
  // get the numbers
  // num1Input value;
  // num2Input value;
  // add the numbers and capture the resulting value
  let result = calculate(+num1Input.value, +num2Input.value, add);
  // print the values
  printToDOM(result);
});
