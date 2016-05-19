'use strict';

// Declare app level module which depends on views, and components
angular.module('siriApp', [
  'ngRoute',
  'siriApp.home',
  'siriApp.sobre',
  'siriApp.user',
  'myApp.version',
  'ngProgress'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])

.run(['ngProgressFactory', '$rootScope', '$location', function(ngProgressFactory, $rootScope, $location) {

  // Init Progress Bar
  $rootScope.progressbar      = ngProgressFactory.createInstance();

  // Set current route as default
  $rootScope.currentRoute = '/home';

  // Alerts
  $rootScope.alert = false;

  // API and Environment
  $rootScope.env = 'development';
  $rootScope.apiURLSettings = {
    "development": "http://localhost/siri-cascudo/app/api/public/"
  };
  $rootScope.apiURL = $rootScope.apiURLSettings[$rootScope.env];

  $rootScope.$on('$routeChangeStart', function(ev,data) {
    // Show loading bar
    $rootScope.progressbar.start();
  });

  $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
    // Detects current page
    $rootScope.currentRoute = $location.path();

    // Finish loading bar
    $rootScope.progressbar.complete();
  });

}]);
