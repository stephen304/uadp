'use strict';

/**
 * @ngdoc function
 * @name uadpApp.controller:SubmitCtrl
 * @description
 * # SubmitCtrl
 * Controller of the uadpApp
 */
angular.module('uadpApp')
  .controller('SubmitCtrl', function (cfg, $scope, $http, $window, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //set form date to current date, and set forms user, location, 
    /*var mydate = new Date();
    $scope.form["123"] = "1234";*/
    $scope.form = {};

    //define select options for age group
    $scope.ageOptions = [
      {value: "Under 18", name: 'Under 18'},
      {value: "18 to 30", name: "18 to 30"},
      {value: "31 to 40", name: "31 to 40"},
      {value: "41 to 50", name: "41 to 50"},
      {value: "51 to 60", name: "51 to 60"},
      {value: "Over 60", name: "Over 60"}
    ];

    $scope.raceOptions = [
      {value: "Caucasian", name: "Caucasian"},
      {value: "Hispanic", name: "Hispanic"},
      {value: "African American", name: "African American"},
      {value: "Asian", name: "Asian"},
      {value: "Other", name: "Other"}
    ];

    $scope.recordOptions = [
      {value: true, name: "Yes"},
      {value: false, name: "No"}
    ];

    $scope.maritalOptions = [
      {value: "Married", name: "Married"},
      {value: "In a relationship", name: "In a relationship"},
      {value: "Divorced", name: "Divorced"},
      {value: "Separated", name: "Separated"},
      {value: "Single", name: "Single"}
    ];

    $scope.educationOptions = [
      {value: "No HS Diploma or GED", name: "No HS Diploma or GED"},
      {value: "HS diploma or GED", name: "HS diploma or GED"},
      {value: "College degree", name: "College degree"},
      {value: "Graduate School", name: "Graduate School"}
    ];


    $scope.submit = function() {
        $scope.form["locationID"] = "41.7,87.7";
        $scope.form["offenderFacePhoto"] = "";
        $scope.form["offenderIDPhoto"] = "";
        $scope.form["offenderVehiclePhoto"] = "";
    	console.log($scope.form);
    	$http
        .post(cfg.apiUrl + "/classes/" + $window.localStorage.jurisdiction, $scope.form)
        .success(function (data, status, headers, config) {
          $window.localStorage.token = data.sessionToken;
          $state.go('submit');
        })
        .error(function (data, status, headers, config) {

          // Handle login errors here
          $scope.message = 'Error: Invalid submission';
        });
    };

    if(!$window.localStorage.token) {
    	$state.go('login');
    }

  });
