console.log("Hello, world");

let song = {};
// console.log("song", song);
song.title = "Love Shack";

let B52Song = Object.create(song);
B52Song.title = "Rock Lobster";
console.log("B52 song", B52Song);

let songMaker = {
  date: "9/22/67",
  makeSongString: function() {
    return `<span>"${this.title}" is from the album "${this.album}" by ${
      this.artist
    }</span>`;
  },
  makeSongCard: function() {
    return `<div class="song-card"><h2></h2></div>`;
  }
};

let song1 = Object.create(songMaker);
song1.title = "Private Idaho";
song1.artist = "The B52s";
song1.album = "Wild Planet";
song1.date = "12/23/95";

let emptyWTF = Object.create(null);

let song2 = Object.create(songMaker);
song2.title = "Junebug";
