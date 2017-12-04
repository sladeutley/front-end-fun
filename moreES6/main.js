let employees = [
  { name: "Bob", department: "sales", title: "sales manager" },
  { name: "Tina", department: "finance", title: "director of finance" },
  { name: "Randy", department: "IT", title: "hardware guy" },
  { name: "Glenda", department: "C-suite", title: "CEO" },
  { name: "Barb", department: "Cool kids", title: "sales manager" }
];

for (let i = 0; i < employees.length; i++) {
  console.log(`${employees[i].name}'s job title is ${employees[i].title}`);
}

// fat arrow function
document.getElementById("btn").addEventListener("click", e => "Hello");

let name = "Fred";
let job = () => "I do the things";
let number = 4;

// Object literal shorthand
let myCollection = {
  name,
  job,
  number
};

let myArr = ["Fred", true, 5, "This array is a mess"];

let nums = [1, 5, 3, 2, 4, 7, 8, 9];

// Make a new array out of an existing array
// let newArr = [];
// nums.forEach(thing => {
//   newArr.push(thing * 2);
// });
// console.log("newArr", newArr);

// OR, use .map
let newArr = nums.map(thing => thing * 2);

console.log("newArr", newArr, "Orginal arr", nums);

// Make a new array of items that meet some condition
let newerArr = nums.filter(thing => {
  return thing % 2 === 0;
});
console.log("newerArr", newerArr);

let salesMgrs = employees.filter(emp => {
  return emp.title === "sales manager";
});
console.log("sales managers", salesMgrs);

// return a single value based on an operation run on every item in an array
let total = myArr.reduce((thing1, thing2) => thing1 + thing2);
console.log("total", total);

let names = ["Fred", "Linda", "Aaron", "Andy", "Zeke"];

console.log("names sorted", names.sort());
console.log("nums sorted", nums.sort());

// Can't sort nums larger than 9 without this baby:
let bigNums = [10, 15, 13, 22, 41, 7, 8, 9];
console.log("oops", bigNums.sort((a, b) => a - b));
