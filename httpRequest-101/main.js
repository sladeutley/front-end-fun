console.log("First line in JS file", Date.now());

// 1. create a new request object
let myRequest = new XMLHttpRequest();

// console.log('myRequest', myRequest);

// 2. Define our callbacks
function executeThisIfXHRFails() {
  console.log("An error occured while transferring the data");
}

function executeThisAfterFileIsLoaded() {
  // console.log("myRequest", myRequest);

  // Look into how to make this work!
  // if(event.target.status === "404") {
  //   console.log('file not found');
  // }

  console.log("event.target", event.target);
  // turn out json string into a JS object
  let data = JSON.parse(this.responseText); //can also use event.target.responseText
  // console.log("data", data);
  outputSongs(data.songs);
}

// 3. setup event listeners for completed request and aborted request
myRequest.addEventListener("load", executeThisAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisIfXHRFails);

// CRUD
// Create Retrieve Update Destroy

// 4. Tell it which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
myRequest.open("GET", "songs.json");
// 5. Go get it, boy!
myRequest.send();

// DOM manipulation stuff
function outputSongs(songsArr) {
  let songList = document.getElementById("song-list");
  songsArr.forEach(function(song) {
    // console.log("song title", song.title);
    songList.innerHTML += `<h2>${song.title}</h2>`;
  });
}

console.log("Last Line in JS file", Date.now());
