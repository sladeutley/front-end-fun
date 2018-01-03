"use strict";

console.log("This is this");

// Remember to go to the
// callsite
// and find the
// execution context

// If trying to run this, comment out all examples and then run one at a time, or you'll get errors

// Example 1:
let fubar = "42";

function baz() {
  console.log("baz");
  bar();
}

function bar() {
  console.log("bar");
  foo();
}

function foo() {
  let fubar = "13";
  console.log("Which fubar?", this.fubar);
}
baz();

// Example 2:
let a = 3;

function foo() {
  console.log("this", this);
}

const obj = {
  a: 2,
  monkey: foo
};

const arr = [1, 2, foo, 3];

obj.monkey();
arr[2]();

// Example 3:
function foo() {
  console.log(this.a);
}

const obj2 = {
  a: 42,
  foo: foo
};

const obj1 = {
  a: 2,
  obj2: obj2
};

obj1.obj2.foo();

// Example 4:
function foo() {
  console.log(this.a);
}

const obj = {
  a: 2,
  foo: foo
};

const bar = obj.foo;
const a = "global warming";

obj.foo();
bar();

// Example 5:
function foo() {
  console.log(this.a);
}

function doFoo(fn) {
  return fn();
}

const obj = {
  a: 2,
  foo: foo
};

const a = "undefined, 'cause of const'";
doFoo(obj.foo);

// Example 6: Play with the fat arrows vs 'function' to see what happens to 'this'
const fatObj = {
  whineLikeLuke: () => {
    console.log("OK. I'll try");
    setTimeout(() => {
      this.speakYoda(), 1000;
    });
  },
  speakYoda: () => {
    console.log("Do. Or do not. There is no try.");
  }
};

fatObj.whineLikeLuke();

// Example 7: Creating properties on a new object via another object's init function.
const animal = {
  init: function(name, fur) { //fat arrow won't work here. Why?
    this.name = name;
    this.fur = fur;
  },
  notVegetable: true
};

const dog = Object.create(animal);
dog.init("Beagle", true);
console.log(dog);
