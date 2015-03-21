"use strict";

angular.module("timer.controllers")

	.controller("RunningTimerController", ["$scope", function ( $scope, $timeout ) {

		$scope.deleteRunningTimer = function ( runningTimer ) {

			var index = $scope.runningTimers.indexOf( runningTimer );

			$scope.confirm = window.confirm("Are You Sure You Want to Delete this Running Timer?");

			if ($scope.confirm === true) {

				$scope.runningTimers.splice( index, 1 );

			}

			return;

		};

		$scope.editRunningTimer = function ( runningTimer ) {

			var index = $scope.runningTimers.indexOf( runningTimer );

			index.show = false;

			index.hide = true;

		};

		$scope.saveRunningTimer = function ( runningTimer ) {

			var index = $scope.runningTimers.indexOf( runningTimer );

			index.show = true;

			index.hide = false;

		};

		$scope.duration = $scope.runningTimer.hh * 3600 + $scope.runningTimer.mm * 60 + $scope.runningTimer.ss;

		$scope.mytimeout = $timeout($scope.onTimeout,1000);

		$scope.onTimeout = function( $timeout, $window ) {

			$scope.duration--;
			
			if($scope.duration > 0) {

				$scope.mytimeout = $timeout($scope.onTimeout,1000);

			}

			else {

				$window.alert("time's up");

			}

			$scope.updateTimer();
		};

		$scope.updateTimer = function() {

			$scope.Math = window.Math;

			$scope.seconds = $scope.duration;

			$scope.hours = $scope.Math.floor($scope.seconds / 3600);

			$scope.seconds -= $scope.hours * 3600;

			$scope.minutes = $scope.Math.floor($scope.seconds / 60);

			$scope.seconds -= $scope.minutes * 60;

			$scope.timerStr = $scope.leadingZero($scope.hours) + ":" + $scope.leadingZero($scope.minutes) + ":" + $scope.leadingZero($scope.seconds);

		};

		$scope.leadingZero = function ( num ) {

			return ( num.length < 2 ) ? "0" + num : num ;

		};
		
		$scope.restartTimer = function(){

			$scope.duration = 60;

			$scope.onTimeout();

		};

	}]);