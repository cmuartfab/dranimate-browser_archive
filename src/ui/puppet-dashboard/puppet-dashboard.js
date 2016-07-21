/** Dranimate Browser UI - Puppet Dashboard
 *
 * Module Name: 'dran.puppetDashboard'
 * Directive Name: <dran-puppet-dashboard>
 */

angular.module('dran.puppetDashboard', ['ngMaterial'])
  .directive('dranPuppetDashboard', function() {
    return {
      restrict: 'AE',
      templateUrl: 'src/ui/puppet-dashboard/puppet-dashboard.html',
      scope: { },
      controller: ['$scope', function($scope) {
        // TODO: connect to current puppet (dummy values for now)
        $scope.pupdash = {
          x: 60,
          y: 75,
          rotation: 0,
          scaleX: 100,
          scaleY: 100
        }
      }]
    };
  });