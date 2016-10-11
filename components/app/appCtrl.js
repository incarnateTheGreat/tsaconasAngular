'use strict';

(function () {
    angular.module('tsaconas').controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope',
        '$rootScope',
        '$location',
        '$window',
        '$timeout'];

    function AppCtrl($scope,
                     $rootScope,
                     $location,
                     $window,
                     $timeout) {

        var vm = this;

        // Assume All Route Change Errors are Fatal
        $rootScope.$on("$routeChangeError", function (evt, current, previous, rejection) {
            console.log("error")
            $location.path("fatalError");
        });

        // Reset Loading Elements on Root Change
        $rootScope.$on("$routeChangeSuccess", function () {
            console.log($location.path());
        });
    }
}());