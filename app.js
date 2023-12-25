// app.js
var app = angular.module('LunchChecker', []);
app.controller('LunchCheckerController', function($scope) {
  $scope.lunchMenu = '';
  $scope.message = '';

  $scope.checkIfTooMuch = function() {
    var items = $scope.lunchMenu.split(',');
    if ($scope.lunchMenu === '') {
      $scope.message = 'Please enter data first';
    } else if (items.length <= 3) {
      $scope.message = 'Enjoy!';
    } else {
      $scope.message = 'Too much!';
    }
  };
});
