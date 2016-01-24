'use strict';

/**
 * @ngdoc function
 * @name uadpApp.controller:SubmitCtrl
 * @description
 * # SubmitCtrl
 * Controller of the uadpApp
 */
angular.module('uadpApp')
  .controller('SubmitCtrl', function (cfg, $scope, $http, $window, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var mydate = new Date();
    $scope.form = {"date": mydate};

    $scope.submit = function() {
    	console.log($scope.form);
    	$http
        .post(cfg.apiUrl + "/classes/" + $window.localStorage.jurisdiction, $scope.form)
        .success(function (data, status, headers, config) {
          $window.localStorage.token = data.sessionToken;
          $state.go('submit');
        })
        .error(function (data, status, headers, config) {

          // Handle login errors here
          $scope.message = 'Error: Invalid submission';
        });
    };

    if(!$window.localStorage.token) {
    	$state.go('login');
    }

  });
