'use strict';

angular.module('siriApp.sobre', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sobre', {
    templateUrl: 'sobre/sobre.html',
    controller: 'SobreCtrl'
  });
}])

.controller('SobreCtrl', [function() {

}]);