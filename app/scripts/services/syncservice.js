'use strict';

/**
 * @ngdoc service
 * @name uadpApp.syncService
 * @description
 * # syncService
 * Service in the uadpApp.
 */
angular.module('uadpApp')
  .service('syncService', function (cfg, $window, alertService, $http) {
    this.cache = ($window.localStorage.sync ? JSON.parse($window.localStorage.sync) : []);

    this.push = function(entry) {
      for (var index = 0; index < this.cache.length; ++index) {
        if (this.cache[index].historicalActivityDate == entry.historicalActivityDate) {
          console.log("prevented dupe");
          return;
        }
      }
      this.cache.push(entry);
      // entry.historicalImport = true;
      // entry.historicalActivityDate = new Date().toISOString();
      console.log(entry);
      $window.localStorage.sync = JSON.stringify(this.cache);
    };

    this.getAll = function() {
      return this.cache;
    };

    this.sync = function(record) {
      $http
        .post(cfg.apiUrl + "/classes/" + $window.localStorage.jurisdiction, record)
        .success(function (data, status, headers, config) {
          this.cache.pop(record);
          alertService.message = {class: 'success', text: 'Data successfully submitted'};
        }.bind(this))
        .error(function (data, status, headers, config) {
          if (status === -1) {
            // Timed out
            alertService.message = {class: 'warning', text: 'Notice: No internet, submission is pending'};
          } else {
            console.log(status);
            // Bad data
            alertService.message = {class: 'danger', text: 'Error: Invalid submission'};
          }
        });
    };

  });
