console.log("ms1 review");

let dogPics = {
  pics: [
    {
      url: "img/dog1.jpeg",
      title: "Happy Dog",
      cat: "dog",
      pairCat: "monkey"
    },
    {
      url: "img/dog2.jpeg",
      title: "Fuzzy Dog",
      cat: "dog",
      pairCat: "monkey"
    },
    {
      url: "img/dog3.jpeg",
      title: "Barking Dog",
      cat: "dog",
      pairCat: "monkey"
    }
  ]
};

let bowPics = {
  pics: [
    {
      url: "img/rainbow1.jpeg",
      title: "Happy rainbow",
      cat: "rainbow",
      pairCat: "horse"
    },
    {
      url: "img/rainbow2.jpeg",
      title: "Fuzzy rainbow",
      cat: "rainbow",
      pairCat: "horse"
    },
    {
      url: "img/rainbow3.jpeg",
      title: "Barking rainbow",
      cat: "rainbow",
      pairCat: "horse"
    }
  ]
};

// ********************************** button stuff **********************************
// An object we can use to make button objects that link to it
const buttonFactory = {
  init: function(cat, pairCat) {
    this.category = cat;
    this.pairCat = pairCat;
    this.gallery = document.getElementsByClassName(`${cat}-card`);
  },
  updateCards: function() {
    let cards = this.gallery;
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.toggle(`fancy-border`);
      cards[i].classList.toggle(`${this.pairCat}-fied`);
    }
  },
  updateText: function(btnEl) {
    btnEl.classList.toggle("active");
    let cat = this.category;
    let pairCat = this.pairCat;
    let h1 = document.getElementById(`${this.category}H1`);
    if (btnEl.classList.contains("active")) {
      btnEl.innerHTML = `${cat}ify it!`;
      h1.innerHTML = capitalizeWord(pairCat);
    } else {
      btnEl.innerHTML = `${pairCat}fy It!`;
      h1.innerHTML = capitalizeWord(cat);
    }
  }
};

// concatenate the first letter of the word, set to uppercase, with the remaining letters of the word
// because there's no "capitalize" method for a string. wat?
function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function makeButton(category, categoryPair) {
  // create a new button object and set its unique values with its init method
  let btn = Object.create(buttonFactory);
  btn.init(category, categoryPair);

  // make a button element to add to the DOM
  let btnElement = document.createElement("button");
  btnElement.setAttribute("id", btn.category);
  btnElement.setAttribute("data-pairId", btn.pairCat);
  btnElement.innerHTML = `${btn.pairCat}fy it!`;

  btnElement.addEventListener("click", () => {
    btn.updateCards();
    btn.updateText(btnElement);
  });
  return btnElement;
}
// **************************** DOM population on page load **********************************
// this replaces the two loops we ran to populate each <article> with its pictures
(function(picCollection) {
  // loop through the array of arrays we passed in
  picCollection.forEach(function(pics, index) {
    let parentEl, cat, pairCat;
    //loop through each array of pics
    pics.forEach(function(pic, index) {
      // assign values to variables defined above
      cat = pic.cat;
      parentEl = document.getElementById(`${cat}-pics`);
      pairCat = pic.pairCat;

      let section = document.createElement("section");
      section.setAttribute("class", `${cat}-card card`);
      section.style.backgroundImage = `url(${pic.url})`;
      parentEl.appendChild(section);
    });
    let button = makeButton(cat, pairCat);
    parentEl.appendChild(button);
  });
})([bowPics.pics, dogPics.pics]);
