'use strict';

/**
 * @ngdoc overview
 * @name uadpApp
 * @description
 * # uadpApp
 *
 * Main module of the application.
 */
angular
  .module('uadpApp', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngTouch'
  ])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
    $urlRouterProvider.otherwise("/login");

     $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "views/login.html",
        controller: "LoginCtrl"
      })
      .state('submit', {
        url: "/submit",
        templateUrl: "views/submit.html",
        controller: "SubmitCtrl"
      })
      .state('sync', {
        url: "/sync",
        templateUrl: "views/sync.html",
        controller: "SyncCtrl"
      });
  })
  .constant('cfg', {
    apiUrl: 'https://api.parse.com/1'
  })
  .run(function($http, $window) {
    $http.defaults.headers.common["X-Parse-Application-Id"] = "cX2Xh7gf3NiSl9hKIzVggArDILe2LulrjHdhZTF6";
    $http.defaults.headers.common["X-Parse-REST-API-Key"] = "PR6moiFgsmZzX6a4SRqLhk0ebc8cLmzYgBDkIfHO";

    // Check if a new cache is available on page load.
    $window.addEventListener('load', function(e) {
      $window.applicationCache.addEventListener('updateready', function(e) {
        if ($window.applicationCache.status == $window.applicationCache.UPDATEREADY) {
          // Browser downloaded a new app cache.
          if (confirm('A new version of this site is available. Load it?')) {
            $window.location.reload();
          }
        }
      }, false);
    }, false);
  });
