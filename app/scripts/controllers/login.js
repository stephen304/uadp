'use strict';

/**
 * @ngdoc function
 * @name uadpApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the uadpApp
 */
angular.module('uadpApp')
  .controller('LoginCtrl', ['config', function ($scope, $http, $window) {
    $scope.submit = function () {
      console.log(config);
      return;
      $http
        .post('/authenticate', $scope.user)
        .success(function (data, status, headers, config) {
          $window.sessionStorage.token = data.token;
          $scope.message = 'Welcome';
        })
        .error(function (data, status, headers, config) {
          // Erase the token if the user fails to log in
          delete $window.sessionStorage.token;

          // Handle login errors here
          $scope.message = 'Error: Invalid user or password';
        });
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
