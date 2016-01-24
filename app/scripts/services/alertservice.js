'use strict';

/**
 * @ngdoc service
 * @name uadpApp.alertService
 * @description
 * # alertService
 * Service in the uadpApp.
 */
angular.module('uadpApp')
  .service('alertService', function () {
    this.message = null;
    this.dismiss = function() {
      this.message = null;
    }
  });
