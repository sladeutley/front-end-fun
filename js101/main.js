console.log("Hello, World");

// 1st iteration
let firstName = "Donna";
let lastName = "Summers";

function printName() {
  console.log(firstName + " " + lastName);
}

printName();

// // refactoring, gathering our data under a single namespace by creating an object and storing those values inside it
let nameThing = {
  firstName: "Donna",
  lastName: "Summers",
  printName: function() {
    console.log(nameThing.firstName + " " + nameThing.lastName);
  }
};

nameThing.songs = [
  { title: "Bad Girls" },
  { title: "She Works Hard for the Money" },
  { title: "Dance Like you Mean It" }
];
console.log(nameThing.songs[2].title);

// dot notation
console.log("dot notation example", nameThing.firstName); // outputs "Donna"
// bracket notation
console.log("bracket notation example", nameThing["firstName"]); //also outputs "Donna"

// // BUT...
let fs = "firstName";
console.log(nameThing[fs]); //outputs "Donna"
console.log(nameThing.fs); // fails

let myArr = ["hello", 5, true];
console.log(myArr.indexOf(true));

// // ===Random cool weird stuff
// // TODO: WAT examples of + and other strange behavior

// // ****** Playing with variables and values **********
// // Time is expressed in milliseconds in JS, so I use those here
const oneSecond = 1000;
const oneMinute = oneSecond * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;
const oneYear = oneDay * 365; // leap years don't exist in this world.
// // But 365 feels like a magic number. Maybe save that as a variable? Worth thinking about
const myAge = 50;

// // How many hours are in a non-leap year
const yearHours = oneYear / oneHour;
console.log("one year in hours", yearHours);

// // How many minutes are in a decade without leap years
const decadeMinutes = oneYear * 10 / oneMinute;
console.log("minutes/decade", decadeMinutes);

// // How many seconds old I am
const ageSeconds = oneYear * 50 / oneSecond;
console.log("my age in seconds", ageSeconds);

// // If I am older than some arbitrary number, console.log "I'm old", else "I'm young"
const num = 35;
if (50 > num) {
  console.log("I am wise");
} else {
  console.log("I am green");
}

// // How we did it in class
let secondsInMinute = 60;
let minsInHour = 60;
let hoursinDay = 24;
let daysInYear = 365;
// How many hours in a year?
let hoursInYear = hoursinDay * daysInYear;
console.log("hours in a year", hoursInYear);

// How many minutes in a decade?

console.log("minutes in a decade", minsInDecade);

// How many seconds old am I?
let myAge = prompt("What is yur age, man?");
// let ageInSeconds =
//   secondsInMinute * minsInHour * hoursinDay * daysInYear * myAge;
// console.log("me", ageInSeconds);
// If I am older than some number, log "I am wise"
// If not, log "I am green"
let newNum = 35;
if (myAge > newNum) {
  console.log("I am wise");
} else {
  console.log("I am green");
}

// Ternary statement. A shorthand for an if/else
let phrase = myAge > newNum ? "I am wise" : "I am green";
// console.log("phrase", phrase); will be either "I am wise" or "I am green"

// For loops

let myArr = [1, 2, 3, 4, 5];

// a looping method on an array
myArr.forEach(function(number) {
  console.log("for each rocks", number);
});

//runs once  //runs until evals false
for (let i = 0; i < myArr.length; i++) {
  console.log("loopin", myArr[i] + 2);
}

// you can use any available variable in your loop, and don't have to
// define a var in the first statement. Gotta have that semicolon, tho
let cow = 0;
for (; cow < myArr.length; cow++) {
  console.log("loopin", myArr[cow] + 2);
}

// example of multiple variables in a loop
for (let i = 0, j = 5; i < myArr.length; i++, j--) {
  console.log("loopin", myArr[i] + 2 + j);
}

// divide the counter by 2 each time
for (let i = 100; i > 1; i = i / 2) {
  console.log("did it work?", i);
}

// // strings have indexes and lengths, too
let word = "Happy";
for (let i = 0; i < word.length; i++) {
  const element = word[i];
  console.log("letter", element);
}

// string methods
const phrase = "the quick brown fox jumps over the lazy dog.";

console.log(phrase.indexOf("t"));
console.log(phrase.charAt(23));

console.log(phrase.replace("lazy", "fuzzy"));

console.log(phrase.replace(/o/g, "gretd"));

console.log(`${"Ho ".repeat(3)}, Merry Christmas`);
console.log("Ho ".repeat(3) + "Merry Christmas");

console.log(`${3 + 4} is a great number`);

// let's reverse a string by using array methods, too.
let phrase2 = "Otto is my name";
// let wordArr = phrase2.split(" ");
console.log(
  "reversed",
  phrase2 // chain a bunch of array calls together
    .split(" ") // turns string into an array
    .reverse() // array method
    .join(" monkey ") // array method that turns array into string
);
