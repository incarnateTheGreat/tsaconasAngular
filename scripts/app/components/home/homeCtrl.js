'use strict';

(function () {
    angular.module("tsaconas").controller("landingCtrl", landingCtrl);

    inviteCtrl.$inject = [];

    function landingCtrl() {

        var vm = this;

        activate();

        function activate() {
            console.log("Landing.")
        }
    }
}());