angular.module('OrganizerApp', [])

.factory('ToysFactory', function(){
  var toyStorage = {
    Sunday: ['ball','moo cow'],
    Monday: ['horsey'],
    Tuesday: ['blocks'],
    Wednesday: ['lawn mower'],
    Thursday: ['music truck'],
    Friday: ['books'],
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