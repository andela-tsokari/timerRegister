'use strict';

angular.module('timer.controllers')

    .controller('TimerController', ['$scope', function( $scope ) {

        $scope.runningTimers = [];

        $scope.addRunningTimer = function ( timer ) {

            $scope.runningTimer = angular.copy( timer );

            $scope.runningTimers.push( $scope.runningTimer );

        };

        $scope.deleteRunningTimer = function ( runningTimer ) {

            var index = $scope.runningTimers.indexOf( runningTimer );

            $scope.confirm = window.confirm('Are You Sure You Want to Delete this Running Timer');

            if ($scope.confirm === true) {

                $scope.runningTimers.splice(index, 1);

            }

            return;

        };

    }]);