angular.module('OrganizerApp', [])

.factory('ToysFactory', function(){
  var toyStorage = {};
  addOne.toyStorage = function(day, toy){
    if (toyStorage[day] === undefined){
      toyStorage[day] = [toy]
    } else{
    toyStorage[day].push(toy);
    }
  }
  return toyStorage;
})

.controller('DaysController', function($scope){
  $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

})

.controller('ToysController', function($scope, ToysFactory){
  $scope.toys = ToysFactory;
  // $scope.addToy = function(){
  //   ToysFactory.addOne($scope.??)
  // }
})