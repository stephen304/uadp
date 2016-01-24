'use strict';

/**
 * @ngdoc service
 * @name uadpApp.syncService
 * @description
 * # syncService
 * Service in the uadpApp.
 */
angular.module('uadpApp')
  .service('syncService', function ($window) {
    this.cache = ($window.localStorage.sync ? JSON.parse($window.localStorage.sync) : []);

    this.push = function(entry) {
      for (var index = 0; index < this.cache.length; ++index) {
        if (this.cache[index].historicalActivityDate == entry.historicalActivityDate) {
          console.log("prevented dupe");
          return;
        }
      }
      this.cache.push(entry);
      entry.historicalImport = true;
      entry.historicalActivityDate = new Date().toISOString();
      console.log(entry);
      $window.localStorage.sync = JSON.stringify(this.cache);
    }

    this.getAll = function() {
      return this.cache;
    }

    this.putAll = function(data) {
      this.cache = data;
      $window.localStorage.sync = JSON.stringify(this.cache);
    }
  });
