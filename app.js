// app.js
var app = angular.module('NarrowItDownApp', []);
app.controller('NarrowItDownController', function($scope, $http) {
  $scope.searchTerm = '';
  $scope.foundItems = [];

  $scope.narrowItDown = function() {
    var promise = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });

    promise.then(function (response) {
      var items = response.data.menu_items;
      $scope.foundItems = [];

      for (var i = 0; i < items.length; i++) {
        if (items[i].description.indexOf($scope.searchTerm) !== -1) {
          $scope.foundItems.push(items[i]);
        }
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  $scope.removeItem = function(itemIndex) {
    $scope.foundItems.splice(itemIndex, 1);
  };
});
