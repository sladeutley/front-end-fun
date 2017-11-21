// console.log("Hello, World");

// 1st iteration
let firstName = "Donna";
let lastName = "Summers";

function printName() {
  console.log(firstName + " " + lastName);
}

printName();

// refactoring, gathering our data under a single namespace by creating an object and storing those values inside it
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

// BUT...
let fs = "firstName";
console.log(nameThing[fs]); //outputs "Donna"
console.log(nameThing.fs); // fails

let myArr = ["hello", 5, true];
console.log(myArr.indexOf(true));

// ===Random cool weird stuff
// TODO: WAT examples of + and other strange behavior

// ****** Playing with variables and values **********
// Time is expressed in milliseconds in JS, so I use those here
const oneSecond = 1000;
const oneMinute = oneSecond * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;
const oneYear = oneDay * 365; // leap years don't exist in this world.
// But 365 feels like a magic number. Maybe save that as a variable? Worth thinking about
const myAge = 50;

// How many hours are in a non-leap year
const yearHours = oneYear / oneHour;
console.log("one year in hours", yearHours);

// How many minutes are in a decade without leap years
const decadeMinutes = oneYear * 10 / oneMinute;
console.log("minutes/decade", decadeMinutes);

// How many seconds old I am
const ageSeconds = oneYear * 50 / oneSecond;
console.log("my age in seconds", ageSeconds);

// If I am older than some arbitrary number, console.log "I'm old", else "I'm young"
const num = 35;
if (50 > num) {
  console.log("I am wise");
} else {
  console.log("I am green");
}

// How we did it in class
let secondsInMinute = 60;
let minsInHour = 60;
let hoursinDay = 24;
let daysInYear = 365;
// How many hours in a year?
let hoursInYear = hoursinDay * daysInYear;
console.log("hours in a year", hoursInYear);

// How many minutes in a decade?

// console.log("minutes in a decade", minsInDecade);

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
