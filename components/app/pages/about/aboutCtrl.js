'use strict';

(function () {
    angular.module("tsaconas").controller("aboutCtrl", aboutCtrl);

    // inviteCtrl.$inject = [];

    function aboutCtrl() {

        var vm = this;

        activate();

        function activate() {
            console.log("Landing.")
        }
    }
}());