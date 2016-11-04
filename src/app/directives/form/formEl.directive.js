(function() {
	'use strict';

	var ctrl =

		angular
		.module('app')
		.directive('formEl', function() {
			var ctrl = ['$scope', '$window', function($scope, $window) {
				var init = function() {
					if ($scope.type == 'dropdown') {
						var opts = $scope.options;
						opts = [{
							id: 1,
							name: "ted",
							level: 1,
							parent: "North America"
						}, {
							id: 3,
							name: "billy",
							level: 1,
							parent: "North America"
						},
						{
							id: 4,
							name: "Simon",
							level: 2,
							parent: "Europe"
						},
						{
							id: 34,
							name: "Stu",
							level: 3,
							parent: "South America"
						}
						];
						$scope.groupBy = 'parent';
						$scope.itemArray = opts;
						$scope.selected = {
							value: $scope.itemArray[0]
						};
					}
				};
				init();
			}];
			return {
				restrict: 'E',
				replace: true,
				scope: {
					type: '@'
				},
				templateUrl: 'app/directives/form/tpls/formEl.html',
				controller: ctrl
			};
		});
})();