angular.module('OrganizerApp', [])

.factory('ToysFactory', function(){
  var toyStorage = {
    Sunday: ['ball','moo cow'],
    Monday: ['horsey', 'puzzle'],
    Tuesday: ['blocks', 'drum'],
    Wednesday: ['lawn mower', 'car'],
    Thursday: ['music truck', 'rattle'],
    Friday: ['books', 'soccer ball'],
    Saturday: ['monkey', 'Mr. Lion']
  }
  return toyStorage;
})

.controller('WeekController', function($scope, ToysFactory){
  $scope.week = ToysFactory;
})

.controller('ToysController', function($scope, ToysFactory){
  $scope.storage = ToysFactory;

  $scope.addToy = function(weekday, name){
    $scope.storage[$scope.weekday].push($scope.name);
  }
})