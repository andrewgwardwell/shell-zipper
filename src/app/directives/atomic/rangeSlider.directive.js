(function() {
	'use strict';
	angular.module('app')
		.directive('rangeSlider', function() {
			var ctrl = ['$scope', function($scope) {
				var init = function() {
					$scope.range = $scope.default;
				}
				$scope.evaluateDistance = function() {

				}
				init();
			}];
			return {
				restrict: 'E',
				replace: true,
				scope: {
					theme: '@',
					default: '@',
					labels: '='
				},
				templateUrl: 'app/directives/atomic/tpls/rangeSlider.html',
				controller: ctrl
			};
		});
})();