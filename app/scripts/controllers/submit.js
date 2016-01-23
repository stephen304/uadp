'use strict';

/**
 * @ngdoc function
 * @name uadpApp.controller:SubmitCtrl
 * @description
 * # SubmitCtrl
 * Controller of the uadpApp
 */
angular.module('uadpApp')
  .controller('SubmitCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var mydate = new Date();
    $scope.date = mydate;
  }]);
