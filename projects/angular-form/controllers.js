// CONTROLLERS
formApp.controller('formController', ['$scope', '$location', 'userService', function formController($scope, $location, userService) {

  $scope.user = {
    "gender"  : "male", // to set default gender
    "addresses": [{}]
  };

  $scope.setUser = userService.setUser;
  $scope.emailFormat = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
  $scope.zipcodeFormat = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;

  $scope.redirectToDatabase = function() {
    $location.path('/database');
  }

  $scope.newAddress = function() {
    $scope.user.addresses.push({});
  }

}]);

formApp.controller('databaseController', ['$scope', 'userService', function($scope, userService) {

  $scope.getUsers = userService.getUsers;

}]);