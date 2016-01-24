'use strict';

describe('Controller: RecordsCtrl', function () {

  // load the controller's module
  beforeEach(module('uadpApp'));

  var RecordsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecordsCtrl = $controller('RecordsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecordsCtrl.awesomeThings.length).toBe(3);
  });
});
