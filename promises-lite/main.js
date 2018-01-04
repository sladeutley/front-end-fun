'use strict';

const xhr = require("./xhr");

function loadSongsToDOM(songs) {
  songs.forEach( (song) => {
    $("#songList").append(`<li>${song.title}, by ${song.artist}, from the album ${song.album}</li>`);
  });
}

$("button").click( () => {
  console.log('clicked!' );
  xhr.fetchSongs()
  .then( (data) => {
    loadSongsToDOM(data);
  })
  .catch( (err) => {
    console.log(err);
  });
});
