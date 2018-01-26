"use strict";

angular.module("funWithStuff").controller("TodoCtrl", function($scope) {
  let name = "Fred";

  $scope.message = "";

  $scope.printValue = () => {
    console.log($scope.message);
  };

  $scope.placeholderThing = "Type over this";

  $scope.todos = [
    { name: "Master HTML/CSS/JS", completed: true },
    { name: "Learn AngularJS", completed: false },
    { name: "Get started With ExpressJS", completed: false },
    { name: "Be Awesome!", completed: true }
  ];

});
