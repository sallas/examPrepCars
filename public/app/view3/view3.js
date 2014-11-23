'use strict';

angular.module('myAppRename.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'app/view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'api/user'
    }).
      success(function (data, status, headers, config) {
        $scope.users = data;
      }).
      error(function (data, status, headers, config) {
        $scope.error = data;
      });
});



