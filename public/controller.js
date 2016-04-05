angular.module('OrganizerApp', [])

.factory('ToysFactory', function(){
  var toyStorage = {
    Sunday: ['ball','moo cow'],
    Monday: ['horsey'],
    Tuesday: ['blocks'],
    Wednesday: ['lawn mower'],
    Thursday: ['music truck'],
    Friday: ['books'],
    Saturday: ['monkey']
  }

  var addOne = function(day, toy){
    if (toyStorage[day] === undefined){
      toyStorage[day] = [toy]
    } else {
    toyStorage[day].push(toy);
    }
  }
  return toyStorage;
})

.controller('WeekController', function($scope, ToysFactory){
  $scope.week = ToysFactory;
})

.controller('ToysController', function($scope, ToysFactory){
  $scope.toys = ToysFactory;
  // $scope.addToy = function(){
  //   ToysFactory.addOne($scope.??)
  // }
})


