"use strict";

const $ = require("jquery");
const $favesContainer = $("#fave-songs");

module.exports.listFaves = (songData) => {
  console.log(songData);
  let $user = $("select").val();
  $favesContainer.append(`<h2>${$user}'s favorite songs are:</h2>`);
  songData.forEach( (song) => {
    $favesContainer.append(`<h4>"${song.title}", by ${song.artist}, from the album "${song.album}"</h4>`);
  });
};
