'use strict';

/**
 * @ngdoc function
 * @name uadpApp.controller:RecordsCtrl
 * @description
 * # RecordsCtrl
 * Controller of the uadpApp
 */
angular.module('uadpApp')
  .controller('RecordsCtrl', function ( $scope, $http, $window, cfg) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http
    	.get(cfg.apiUrl + "/classes/US_IL_CookCounty")
    	.success(function (data, status, headers, config) {
          $scope.myTable = data.results;
          console.log(data.results);
        })

  });
