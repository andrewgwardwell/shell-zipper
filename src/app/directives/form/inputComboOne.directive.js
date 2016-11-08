(function() {
	'use strict';
	angular.module('app')
		.directive('inputComboOne', function() {
			var ctrl = ['$scope', function($scope) {
				var init = function() {
					console.log($scope);
					$scope.fields = [
						{}
					];
				};
				init();
				$scope.removeField = function(i){
					$scope.fields.splice(i, 1);
				};
				$scope.addField = function(){
					$scope.fields.push({});
				}
			}];
			return {
				restrict: 'E',
				replace: true,
				scope: {
					clabel: '='
				},
				templateUrl: 'app/directives/form/tpls/inputComboOne.html',
				controller: ctrl
			};
		});
})();