'use strict';

/**
 * @ngdoc function
 * @name uadpApp.controller:SubmitCtrl
 * @description
 * # SubmitCtrl
 * Controller of the uadpApp
 */
angular.module('uadpApp')
  .controller('SubmitCtrl', function (cfg, $scope, $http, $window, $state, alertService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if($window.localStorage.jurisdiction === "US_IL_CookCounty") {
      console.log("hi");
    };

    $scope.alert = alertService;
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

    $scope.employmentOptions = [
      {value: "Unemployed", name: "Unemployed"},
      {value: "Technology", name: "Technology"},
      {value: "Retail", name: "Retail"},
      {value: "Manufacturing", name: "Manufacturing"},
      {value: "Government", name: "Government"},
      {value: "Finance", name: "Finance"},
      {value: "Non-Profit", name: "Non-Profit"},
      {value: "Entertainment", name: "Entertainment"},
      {value: "Travel", name: "Travel"}
    ];

    $scope.adPaymentOptions = [
      {value: "Amex", name: "Amex"},
      {value: "Mastercard", name: "Mastercard"},
      {value: "Discover", name: "Discover"},
      {value: "Visa", name: "Visa"},
      {value: "Prepaid Amex", name: "Prepaid Amex"},
      {value: "Prepaid Mastercard", name: "Prepaid Mastercard"},
      {value: "Prepaid Discover", name: "Prepaid Discover"},
      {value: "Entertainment", name: "Entertainment"},
      {value: "Prepaid Visa", name: "Prepaid Visa"}
    ];

    $scope.websiteUsedOptions = [
      {value: "Craigslist", name: "Craigslist"},
      {value: "Backpage", name: "Backpage"},
      {value: "Cityvibe", name: "Cityvibe"},
      {value: "RealGFE", name: "RealGFE"},
      {value: "Tinder", name: "Tinder"}
    ];

    $scope.uploadFile = function(files) {
      $scope.form['offenderFacePhoto'] = {"__type": files[0], "name": files[0]["name"]};
    };

    $scope.submit = function() {
        $scope.form["locationID"] = "41.7,87.7";
        // $scope.form["offenderFacePhoto"] = "";
        $scope.form["offenderIDPhoto"] = "";
        $scope.form["offenderVehiclePhoto"] = "";
    	console.log($scope.form);
    	$http
        .post(cfg.apiUrl + "/classes/" + $window.localStorage.jurisdiction, $scope.form)
        .success(function (data, status, headers, config) {
          $scope.alert.message = {class: 'success', text: 'Data successfully submitted'};
          $state.go('submit');
        })
        .error(function (data, status, headers, config) {
          if (status === -1) {
            // Timed out
          } else {
            console.log(status);
            // Bad data
            $scope.alert.message = {class: 'danger', text: 'Error: Invalid submission'};
          }
        });
    };

    if(!$window.localStorage.token) {
    	$state.go('login');
    }

  });
