"use strict";

angular
  .module("funWithStuff")
  .controller("SongDetailCtrl", function($scope, $routeParams, SongFactory) {
    console.log("the id", $routeParams.songId);

    $scope.test = "Hello C23";

    SongFactory.getSongs().then(songData => {
      $scope.songDetail = songData.data.songs.find(
        song => song.id === +$routeParams.songId
      );
      console.log('songDetail?', $scope.songDetail);

    });
  });
