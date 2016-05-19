'use strict';

angular.module('siriApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$rootScope', 'UserFactory', '$scope', function($rootScope, UserFactory, $scope) {
  
  // Login action
  $scope.login = function(user) {

    UserFactory.login(user).then(function(result) {
      // User and/or password invalid
      if(result.data.status == "error") {
        $rootScope.alert = {text: 'Usuário e/ou senha inválidos.', type: 'danger'};
      // User valid
      } else if(result.data.status == "success") {
        $rootScope.alert = {text: 'Seja bem-vindo ao Siri Cascudo!', type: 'success'};
      }

      // Clear user data
      $scope.user = {};

    });

  };

  // Register action
  $scope.register = function(user) {
  };

}]);