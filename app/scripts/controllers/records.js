'use strict';

/**
 * @ngdoc function
 * @name uadpApp.controller:RecordsCtrl
 * @description
 * # RecordsCtrl
 * Controller of the uadpApp
 */
angular.module('uadpApp')
  .controller('RecordsCtrl', function ( $scope, $http, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http
    	.get('https://api.parse.com/1/classes/US_IL_CookCounty')
    	.success(function (data, status, headers, config) {
          $scope.myTable = data.results;
          console.log(data.results);
        })

  });
