'use strict';

/**
 * @ngdoc service
 * @name uadpApp.authService
 * @description
 * # authService
 * Service in the uadpApp.
 */
angular.module('uadpApp')
  .service('authService', function () {
    this.loggedIn = false;
  });
