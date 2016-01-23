'use strict';

/**
 * @ngdoc service
 * @name uadpApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the uadpApp.
 */
angular.module('uadpApp')
  .factory('authInterceptor', function ($rootScope, $q, $window) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if ($window.localStorage.token) {
          config.headers["X-Parse-Session-Token"] = $window.localStorage.token;
        }
        return config;
      },
      response: function (response) {
        if (response.status === 401) {
          // handle the case where the user is not authenticated
        }
        return response || $q.when(response);
      }
    };
  });
