"use strict";

// DOM interaction with vanilla JS
// let list = document.getElementById("list-of-stuff");
// let things = document.getElementsByClassName("h3Thing");

// jQuery: Wraps an element in an object chock full o' methods
$("#fish").click(doSomething); // won't work. #fish isn't in DOM yet
$(document).on("click", "#fish", doSomething);

$("#list-of-stuff")
  .addClass("awesomeness")
  .append(`<li id="fish">Fish</li>`);

let $thing = $(".h3Thing");

console.log($thing.eq(1));

$thing.addClass("moreAwesome");

// $(".h3Thing:nth-child(2)").append("Fred is a name")
$(".h3Thing:eq(2)").append("Fred is a name");

console.log($(".container").find(".album"));

console.log(
  $(".album")
    .parents(".song-container")
    .attr("name")
);

function doSomething() {
  console.log("You clicked the btn");
}

$("h3").click(function() {
  console.log($(this).text());
  $(this).css("color", "red");
});

$("#button-lame").click(() => {
  $(".song").slideToggle();
});

$(document).on("click", "button[id^='button-']", function() {
  $(this).parents(".song").remove();
})

console.log("h3s", $(".h3Thing"));

console.log($("input").attr("name"));

// AJAX!!

// Vanilla way
// let myReq = new XMLHttpRequest();
// myReq.addEventListener("load", function() {
//   let data = JSON.parse(this.responseText);
//   console.log('data', data);
// });
// myReq.open("GET", "songs.json");
// myReq.send();

// jQuery way
$.ajax({
  url: "songs.json"
})
.done(executeAfterAjax)
.fail(ifBork);

function ifBork(data) {
  console.log('Ooops', data);
}

function executeAfterAjax(data) {
  console.log(data.songs);
  let songs = data.songs;
  $(songs).each( (index, song) => {
    $("#song-list").append(`<li>${song.title}</li>`)
  });
}
