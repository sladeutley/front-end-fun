(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./xhr":2}],2:[function(require,module,exports){
"use strict";

module.exports.fetchSongs = () => {
  return new Promise( (resolve, reject) => {
    console.log("fetching songs");
    $.ajax({
      url: "songs.json"
    }).done(data => {
      console.log(data.songs);
      // do something with the data!
      resolve(data.songs);
    }).fail( (error) => reject(error));
  });
};

},{}]},{},[1]);
