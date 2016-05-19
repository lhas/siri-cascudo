'use strict';

angular.module('siriApp.user', [])

.factory('UserFactory', ['$http', '$rootScope', function($http, $rootScope) {
  var User = {};

  User.login = function(user) {

    return $http.post($rootScope.apiURL + 'login', user);
  };

  return User;
}]);