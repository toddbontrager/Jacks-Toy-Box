angular.module('OrganizerApp', [])

.factory('ToysFactory', function(){
  var toyStorage = {};
  addToy.toyStorage = function(toy){
    toyStorage[toy] = toy;
  }
  return toyStorage;
})

.controller('DaysController', function($scope){
  $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
})

.controller('ToysController', function($scope, ToysFactory){

})