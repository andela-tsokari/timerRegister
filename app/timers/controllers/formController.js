"use strict";

angular.module("timer.controllers")

	.controller("FormController", ["$scope", function( $scope ) {

		$scope.timers = [];

		$scope.addTimer = function( newTimer ) {

			$scope.timer = angular.copy( newTimer );

			$scope.timers.push( $scope.timer );

			$scope.newTimer = {};
		};

		$scope.deleteTimer = function( timer ) {

            var index = $scope.timers.indexOf( timer );

            $scope.confirm = window.confirm( "Are You Sure You Want to Delete This Timer?" );

            if ( $scope.confirm === true ) {

            	$scope.timers.splice( index, 1 );

            }

            return;

        };

        $scope.editTimer = function ( timer ) {

        	var index = $scope.timers.indexOf( timer );

        	index.show = false;

        	index.hide = true;

        };


		
	}]);