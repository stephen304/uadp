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
  .config(function($stateProvider, $urlRouterProvider) {
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
      });
  })
  .constant('config', {
    apiUrl: 'http://www.google.com?api'
  });
