'use strict';

(function () {
    angular.module("tsaconas").controller("homeCtrl", homeCtrl);

    // inviteCtrl.$inject = [];

    function homeCtrl() {

        var vm = this;

        activate();

        function activate() {
            console.log("Home.")
        }
    }
}());