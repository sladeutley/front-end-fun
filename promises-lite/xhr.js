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
