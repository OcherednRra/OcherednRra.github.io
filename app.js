// app.js
var app = angular.module('ShoppingListCheckOff', []);
app.controller('ToBuyController', function($scope, ItemsService) {
  $scope.items = ItemsService.getToBuyItems();

  $scope.buyItem = function(itemIndex) {
    ItemsService.buyItem(itemIndex);
  };
});

app.controller('AlreadyBoughtController', function($scope, ItemsService) {
  $scope.items = ItemsService.getBoughtItems();
});

app.service('ItemsService', function() {
  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    // Add more items here
  ];
  var boughtItems = [];

  this.buyItem = function(itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  this.getToBuyItems = function() {
    return toBuyItems;
  };

  this.getBoughtItems = function() {
    return boughtItems;
  };
});
