angular.module('OrganizerApp', [])

.factory('ToysFactory', function(){
  var toyStorage = {
    Sunday: ['ball'],
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

.controller('DaysController', function($scope, ToysFactory){
  $scope.week = ToysFactory;

  var daySelection = [];
  var toySelection = [];
  
  angular.forEach(ToysFactory, function(value, key){
   daySelection.push(key);
  });

  angular.forEach(ToysFactory, function(value){
    toySelection.push(value);
  });

  $scope.days = daySelection;
  $scope.toys = toySelection;


//   //i need something so that on click, it passes the info of that particular day to the next function

})

.controller('ToysController', function($scope, ToysFactory){
  $scope.toys = ToysFactory;
  // $scope.addToy = function(){
  //   ToysFactory.addOne($scope.??)
  // }
})