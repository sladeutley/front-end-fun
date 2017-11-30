console.log("ms1 review");

let dogContent = document.getElementById("dogs");
let rainbowContent = document.getElementById("rainbows");
let monkeyBtn = document.getElementById("monkeyfy");
let horseBtn = document.getElementById("horsefy");
let dogH1 = document.getElementById("dogH1");
let rainbowH1 = document.getElementById("rainbowH1");

let dogPics = {
  pics: [
    { url: "img/dog1.jpeg", title: "Happy Dog" },
    { url: "img/dog2.jpeg", title: "Fuzzy Dog" },
    { url: "img/dog3.jpeg", title: "Barking Dog" }
  ]
};

let bowPics = {
  pics: [
    { url: "img/rainbow1.jpeg", title: "Happy rainbow" },
    { url: "img/rainbow2.jpeg", title: "Fuzzy rainbow" },
    { url: "img/rainbow3.jpeg", title: "Barking rainbow" }
  ]
};

// dynamically create some elements to insert pics into
// make n sections: n is based on number of imgs are available
// insert the pictures
// loop through the images and create sections one at a time

for (let i = 0; i < dogPics.pics.length; i++) {
  let section = document.createElement("section");
  section.setAttribute("class", "dog-card card");
  section.style.backgroundImage = `url(${dogPics.pics[i].url})`;
  dogContent.appendChild(section);
}

for (let i = 0; i < bowPics.pics.length; i++) {
  let section = document.createElement("section");
  section.setAttribute("class", "rainbow-card card");
  section.style.backgroundImage = `url(${bowPics.pics[i].url})`;
  rainbowContent.appendChild(section);
}

// Click on a button and make the pictures swap out with something else
// event listener on each button
monkeyBtn.addEventListener("click", function() {
  console.log("Is this thing on?");
  monkeyBtn.classList.toggle("monkey");
  let dogCards = document.getElementsByClassName("dog-card");
  for (let i = 0; i < dogCards.length; i++) {
    // image change
    if (this.classList.contains("monkey")) {
      dogCards[i].style.backgroundImage = "url(img/dog-monkey.jpeg)";
    } else {
      dogCards[i].style.backgroundImage = `url(${dogPics.pics[i].url})`;
    }
    // border change
    dogCards[i].classList.toggle("fancy-border");
  }
  // button text change
  // h1 text change
  if (this.classList.contains("monkey")) {
    console.log(this);
    this.innerHTML = "Dogify It!";
    dogH1.innerHTML = "Monkey";
  } else {
    this.innerHTML = "Monkeyfy It!";
    dogH1.innerHTML = "Dog";
  }
});

horseBtn.addEventListener("click", function() {
  console.log("Is this thing on?");
  this.classList.toggle("horse");
  let horseCards = document.getElementsByClassName("rainbow-card");
  for (let i = 0; i < horseCards.length; i++) {
    if (this.classList.contains("horse")) {
      // image change
      horseCards[i].style.backgroundImage = "url(img/horse-rainbow.jpeg)";
    } else {
      horseCards[i].style.backgroundImage = `url(${bowPics.pics[i].url})`;
    }
    // border change
    horseCards[i].classList.toggle("fancy-border");
  }
  // button text change
  // h1 text change
  if (this.classList.contains("horse")) {
    console.log(this);
    this.innerHTML = "Rainbowfy It!";
    rainbowH1.innerHTML = "Horse";
  } else {
    this.innerHTML = "Horsefy It!";
    rainbowH1.innerHTML = "Rainbow";
  }
});
