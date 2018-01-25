'use strict';

angular.module("funWithStuff").controller("SongCtrl", function($scope, SongFactory) {

  SongFactory.getSongs()
  .then( (songData) => {
    console.log('songData', songData);
    $scope.songList = songData.data.songs;
  });

});
