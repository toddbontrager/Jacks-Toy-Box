angular.module('OrganizerApp', [])

.factory('ToysFactory', function(){
  var toyStorage = {toys: [['toy1', 'toy2'], ['toy3', 'toy4']]};
    // {weekday: 'Sunday'}
    // {weekday: 'Monday', toy: 'monkey'},
    // {weekday: 'Tuesday', toy: 'horsey'},
    // {weekday: 'Wednesday', toy: 'blocks'},
    // {weekday: 'Thursday', toy: 'lawn mower'},
    // {weekday: 'Friday', toy: 'music truck'},
    // {weekday: 'Saturday', toy: 'books'}

  var addOne = function(day, toy){
    if (toyStorage[day] === undefined){
      toyStorage[day] = [toy]
    } else{
    toyStorage[day].push(toy);
    }
  }
  return toyStorage;
})

.controller('DaysController', function($scope, ToysFactory){
  var list = ToysFactory.toys;
  console.log(list[0])
  $scope.days =[
  {weekday: 'Sunday', toy: list[0][0]},
  {weekday: 'Monday', toy: 'monkey'},
  {weekday: 'Tuesday', toy: 'horsey'},
  {weekday: 'Wednesday', toy: 'blocks'},
  {weekday: 'Thursday', toy: 'lawn mower'},
  {weekday: 'Friday', toy: 'music truck'},
  {weekday: 'Saturday', toy: 'books'}
  ];

  // var toySelection = [];
  // var daySelection = [];
  
  // angular.forEach(ToysFactory, function(value, key){
  //  daySelection.push(key);
  // });

  // angular.forEach(ToysFactory, function(value){
  //   toySelection.push(value);
  // });

  // $scope.days = daySelection;
  //$scope.toys = toySelection;

  //['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   $scope.toys = ToysFactory.days
//   //i need something so that on click, it passes the info of that particular day to the next function

})

.controller('ToysController', function($scope, ToysFactory){
  $scope.toys = ToysFactory;
  // $scope.addToy = function(){
  //   ToysFactory.addOne($scope.??)
  // }
})