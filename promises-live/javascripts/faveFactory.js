'use strict';

const $ = require('jquery');

module.exports.getFaves = (user) => {
  return new Promise( (resolve, reject) => {
    $.ajax({
      url: `data/songs-${user.id}.json`
    }).done( (data) => {
      console.log('songs', data.songs);
      resolve(data.songs);
    });
  });
};
