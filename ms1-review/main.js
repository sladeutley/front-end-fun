console.log("ms1 review");

let dogContent = document.getElementById("dogs");
let rainbowContent = document.getElementById("rainbows");
let dogBtn = document.getElementById("dog");
let rainbowBtn = document.getElementById("rainbow");
let dogH1 = document.getElementById("dogH1");
let rainbowH1 = document.getElementById("rainbowH1");

let dogPics = {
  pics: [
    { url: "img/dog1.jpeg", title: "Happy Dog", cat: "dog" },
    { url: "img/dog2.jpeg", title: "Fuzzy Dog", cat: "dog" },
    { url: "img/dog3.jpeg", title: "Barking Dog", cat: "dog" }
  ]
};

let bowPics = {
  pics: [
    { url: "img/rainbow1.jpeg", title: "Happy rainbow", cat: "rainbow" },
    { url: "img/rainbow2.jpeg", title: "Fuzzy rainbow", cat: "rainbow" },
    { url: "img/rainbow3.jpeg", title: "Barking rainbow", cat: "rainbow" }
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

function updateCard(cards, category) {
  console.log("cards", cards);

  for (let i = 0; i < cards.length; i++) {
    // image change and border change
    cards[i].classList.toggle(`fancy-border`);
    cards[i].classList.toggle(`${category}-fied`);
  }
}

function updateText(btn, h1, cat1, cat2) {
  // h1 text change and button text change
  btn.classList.toggle(cat1);
  if (btn.classList.contains(cat1)) {
    console.log(this);
    event.target.innerHTML = `${cat2}ify It!`;
    h1.innerHTML = cat1;
  } else {
    event.target.innerHTML = `${cat1}fy It!`;
    h1.innerHTML = cat2;
  }
}

// Click on a button and make the pictures swap out with something else
// event listener on each button
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    console.log(event.target.id, event.target.getAttribute("data-pairId"));
    updateCard(
      document.getElementsByClassName(`${event.target.id}-card`),
      event.target.getAttribute("data-pairId")
    );
    updateText(
      event.target,
      `${event.target.id}H1`,
      event.target.getAttribute("data-pairId"),
      event.target.id
    );
  });
}
