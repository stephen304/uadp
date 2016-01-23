'use strict';

/**
 * @ngdoc function
 * @name uadpApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the uadpApp
 */
angular.module('uadpApp')
  .controller('LoginCtrl', function (cfg, $scope, $http, $window, $state) {
    $scope.submit = function () {
      $http
        .get(cfg.apiUrl + '/login?username=' + encodeURIComponent($scope.user.username) + '&password=' + encodeURIComponent($scope.user.password))
        .success(function (data, status, headers, config) {
          $window.localStorage.token = data.sessionToken;
          $window.localStorage.jurisdiction = data.jurisdictionInfo;
          $state.go('submit');
        })
        .error(function (data, status, headers, config) {
          // Erase the token if the user fails to log in
          delete $window.localStorage.token;
          delete $window.localStorage.jurisdiction;

          // Handle login errors here
          $scope.message = 'Error: Invalid user or password';
        });
    };

    if ($window.localStorage.token) {
      $state.go('submit');
    }

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
