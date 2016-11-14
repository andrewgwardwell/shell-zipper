(function() {
	'use strict';
	angular.module('app')
		.directive('specCheckbox', function() {
			var ctrl = ['$scope', function($scope) {
				var init = function() {
					$scope.state = $scope.default;
					$scope.innerState = $scope.state == 'off' ? false : true;
				};
				init();
				$scope.toggleClass = function() {
					if ($scope.innerState) {
						$scope.state = 'on';
					} else {
						$scope.state = 'off';
					}
				}
				$scope.toggleEl = function() {
					$scope.innerState = !$scope.innerState;
					$scope.toggleClass();
				}
			}];
			return {
				restrict: 'E',
				replace: true,
				scope: {
					theme: '@',
					default: '@',
					labels: '='
				},
				templateUrl: 'app/directives/form/tpls/specCheckbox.html',
				controller: ctrl
			};
		});
})();