'use strict';

describe('Controller: SyncCtrl', function () {

  // load the controller's module
  beforeEach(module('uadpApp'));

  var SyncCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SyncCtrl = $controller('SyncCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SyncCtrl.awesomeThings.length).toBe(3);
  });
});
