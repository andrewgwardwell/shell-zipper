(function() {
	'use strict';

	// var ctrl =

	angular
		.module('app')
		.directive('formEl', function() {
			var ctrl = ['$scope', function($scope) {
				var init = function() {
					if ($scope.type == 'dropdown' || $scope.type == 'dropdown-simple') {
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
						}, {
							id: 4,
							name: "Simon",
							level: 2,
							parent: "Europe"
						}, {
							id: 34,
							name: "Stu",
							level: 3,
							parent: "South America"
						}];
						$scope.groupBy = 'parent';
						$scope.itemArray = opts;
						$scope.selected = {
							value: $scope.itemArray[0]
						};
					}
				};

				$scope.today = function() {
					$scope.dt = new Date();
				};
				$scope.today();

				$scope.clear = function() {
					$scope.dt = null;
				};

				$scope.inlineOptions = {
					customClass: getDayClass,
					minDate: new Date(),
					showWeeks: true
				};

				$scope.dateOptions = {
					dateDisabled: disabled,
					formatYear: 'yy',
					maxDate: new Date(2020, 5, 22),
					minDate: new Date(),
					startingDay: 1
				};

				// Disable weekend selection
				function disabled(data) {
					var date = data.date,
						mode = data.mode;
					return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
				}

				$scope.toggleMin = function() {
					$scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
					$scope.dateOptions.minDate = $scope.inlineOptions.minDate;
				};

				$scope.toggleMin();

				$scope.open1 = function() {
					$scope.popup1.opened = true;
				};

				$scope.open2 = function() {
					$scope.popup2.opened = true;
				};

				$scope.setDate = function(year, month, day) {
					$scope.dt = new Date(year, month, day);
				};

				$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
				$scope.format = $scope.formats[0];
				$scope.altInputFormats = ['M!/d!/yyyy'];

				$scope.popup1 = {
					opened: false
				};

				$scope.popup2 = {
					opened: false
				};

				var tomorrow = new Date();
				tomorrow.setDate(tomorrow.getDate() + 1);
				var afterTomorrow = new Date();
				afterTomorrow.setDate(tomorrow.getDate() + 1);
				$scope.events = [{
					date: tomorrow,
					status: 'full'
				}, {
					date: afterTomorrow,
					status: 'partially'
				}];

				function getDayClass(data) {
					var date = data.date,
						mode = data.mode;
					if (mode === 'day') {
						var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

						for (var i = 0; i < $scope.events.length; i++) {
							var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

							if (dayToCheck === currentDay) {
								return $scope.events[i].status;
							}
						}
					}

					return '';
				}

				init();
			}];
			return {
				restrict: 'E',
				replace: true,
				scope: {
					type: '@',
					options: '=',
					label: '@'
				},
				templateUrl: 'app/directives/form/tpls/formEl.html',
				controller: ctrl
			};
		});
})();