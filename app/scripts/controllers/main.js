'use strict';

/**
 * @ngdoc function
 * @name uadpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uadpApp
 */
angular.module('uadpApp')
  .controller('MainCtrl', function ($scope, alertService) {
    $scope.alert = alertService;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
