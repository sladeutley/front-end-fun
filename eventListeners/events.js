console.log("events are cool");

let thing = "Hello";

function revealMysteries() {
  console.log("thing", event);
  // Where the event is attached
  console.log("ooooh, currentTarget", event.currentTarget);
  // From where the event comes
  let selectedBtn = event.target.id;
  // classList https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  event.target.classList.toggle("blueText");
  event.currentTarget.classList.toggle("redBack");
}

function playWithElements() {
  let pTags = document.getElementsByClassName("greeting");
  let pId = document.getElementById("firstP");

  console.log("pId", pId); //logs a single element
  console.log("pTags", pTags); //logs an HTMLCollection array-like object

  // Have to loop through a collection created when we 'getElementsByClassName' in order to add a class to each of the elements
  for (let i = 0; i < pTags.length; i++) {
    pTags[i].classList.toggle("greenText");
  }
}

// document.getElementById("parent").addEventListener("click", revealMysteries);

document.getElementById("parent").addEventListener("click", playWithElements);
