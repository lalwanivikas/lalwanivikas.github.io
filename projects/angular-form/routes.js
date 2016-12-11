// ROUTES
formApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/form.html',
    controller: 'formController'
  })

  .when('/database', {
    templateUrl: 'pages/database.html',
    controller: 'databaseController'
  })

  .otherwise({
    redirectTo: '/'
  })

}]);