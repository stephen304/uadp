'use strict';

/**
 * @ngdoc function
 * @name uadpApp.controller:SyncCtrl
 * @description
 * # SyncCtrl
 * Controller of the uadpApp
 */
angular.module('uadpApp')
  .controller('SyncCtrl', function ($scope, syncService) {

    $scope.records = syncService.getAll();

    $scope.sync = function(record) {
      $scope.records.pop(record);
      syncService.sync(record);
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
